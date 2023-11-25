/*
 *** *** *** *** *** *** *** *** *** *** *** ***
 *** 	Cringe website by Gátomo 	*** ***  ***
 *** 	https://github.com/gatomod/cringe	 ***
 *** 	This code is garbage, like the site	 ***
 *** *** *** *** *** *** *** *** *** *** *** ***
 *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
 *** *** Part of the code is from https://github.com/feross/TheAnnoyingSite.com	*** ***
 *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
 */

const SCREEN_WIDTH = window.screen.availWidth;
const SCREEN_HEIGHT = window.screen.availHeight;
const WIN_WIDTH = 900;
const WIN_HEIGHT = 460;
const VELOCITY = 15;
const MARGIN = 15;
const TOP_MARGIN = 50;
const TICK_LENGTH = 50;
const WINDOW_COUNT = 20;

// BBS from https://genocidioastral.fundacionamigos.repl.co by Mrgaton <3
// https://github.com/Mrgaton
const music = ['funkytown', 'uefa', 'fica', 'outro', 'bbs'];

const random = arr => {
	return arr[Math.floor(Math.random() * arr.length)];
};

const randomAudio = () => {
	let audio = new Audio(`./assets/${random(music)}.opus`);
	audio.play();
};

window.onload = () => {
	if ((window.opener && isParentSameOrigin()) || window.location.search.indexOf('child=true') !== -1) {
		moveWindowBounce();
	}
	animateUrlWithEmojis();

	let body = document.querySelector('body');
	let mercadona = document.querySelector('.mercadona');
	let ministerio = document.querySelector('.ministerio, .fish');
	let h2 = document.querySelector('h2');
	let video = document.getElementById('video');

	video.ondblclick = async () => {
		window.open('.', '_blank');
		window.open('./assets/cinta.webm', '_blank');
		await new Promise(r => setTimeout(r, 400));
		window.open('.', '_blank');
		window.open('./assets/cinta.webm', '_blank');
		await new Promise(r => setTimeout(r, 400));
		window.open('.', '_blank');
		window.open('./assets/cinta.webm', '_blank');
		await new Promise(r => setTimeout(r, 400));
		window.open('.', '_blank');
		window.open('./assets/cinta.webm', '_blank');
		await new Promise(r => setTimeout(r, 400));
		window.open('.', '_blank');
		window.open('./assets/cinta.webm', '_blank');
		await new Promise(r => setTimeout(r, 400));
		window.open('.', '_blank');
		window.open('./assets/cinta.webm', '_blank');
		await new Promise(r => setTimeout(r, 400));
		window.open('.', '_blank');
		window.open('./assets/cinta.webm', '_blank');
		await new Promise(r => setTimeout(r, 400));
		window.open('.', '_blank');
		window.open('./assets/cinta.webm', '_blank');
		await new Promise(r => setTimeout(r, 400));
		window.open('.', '_blank');
		window.open('./assets/cinta.webm', '_blank');
	};
	video.onclick = () => {
		body.requestFullscreen();
		video.play();
	};
	video.onpause = () => {
		video.play();
	};

	h2.onclick = () => {
		let audio = new Audio('./assets/soultrain.opus');
		for (i of 'a'.repeat(WINDOW_COUNT).split('')) {
			openWindow('./data.html');
		}
		audio.play();
	};

	ministerio.onclick = () => {
		requestMidiAccess();
		let audio = new Audio('./assets/warning.opus');
		for (i of 'a'.repeat(WINDOW_COUNT).split('')) {
			openWindow('./vid.html');
		}
		audio.play();
	};

	mercadona.onclick = async () => {
		requestMidiAccess();
		randomAudio();
		for (i of 'a'.repeat(WINDOW_COUNT).split('')) {
			openWindow();
			await new Promise(r => setTimeout(r, 400));
		}
	};
};

///////////////////////////////////////////////////
///////////////////////////////////////////////////
////////////       Not my code       //////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////

function animateUrlWithEmojis() {
	if (window.ApplePaySession) {
		// Safari doesn't show the full URL anyway, so we can't animate it
		return;
	}
	const rand = Math.random();
	if (rand < 0.33) {
		animateUrlWithBabies();
	} else if (rand < 0.67) {
		animateUrlWithWave();
	} else {
		animateUrlWithMoons();
	}

	function animateUrlWithBabies() {
		const e = ['😿', '💎', '🤑', '🍃', '🤗'];

		setInterval(() => {
			let s = '';
			let i;
			let m;

			for (i = 0; i < 10; i++) {
				m = Math.floor(e.length * ((Math.sin(Date.now() / 100 + i) + 1) / 2));
				s += e[m];
			}

			window.location.hash = s;
		}, 100);
	}

	function animateUrlWithWave() {
		setInterval(() => {
			let i;
			let n;
			let s = '';

			for (i = 0; i < 10; i++) {
				n = Math.floor(Math.sin(Date.now() / 200 + i / 2) * 4) + 4;

				s += String.fromCharCode(0x2581 + n);
			}

			window.location.hash = s;
		}, 100);
	}

	function animateUrlWithMoons() {
		const f = ['🌑', '🌘', '🌗', '🌖', '🌕', '🌔', '🌓', '🌒'];
		const d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		let m = 0;

		setInterval(() => {
			let s = '';
			let x = 0;

			if (!m) {
				while (d[x] === 4) {
					x++;
				}

				if (x >= d.length) m = 1;
				else {
					d[x]++;
				}
			} else {
				while (d[x] === 0) {
					x++;
				}

				if (x >= d.length) m = 0;
				else {
					d[x]++;

					if (d[x] === 8) d[x] = 0;
				}
			}

			d.forEach(function (n) {
				s += f[n];
			});

			window.location.hash = s;
		}, 100);
	}
}
function getRandomCoords() {
	const x = MARGIN + Math.floor(Math.random() * (SCREEN_WIDTH - WIN_WIDTH - MARGIN));
	const y = TOP_MARGIN + Math.floor(Math.random() * (SCREEN_HEIGHT - WIN_HEIGHT - TOP_MARGIN));
	return { x, y };
}

function openWindow(path = window.location.pathname) {
	const { x, y } = getRandomCoords();
	const opts = `width=${WIN_WIDTH},height=${WIN_HEIGHT},left=${x},top=${y}`;
	const win = window.open(path, '', opts);

	// New windows may be blocked by the popup blocker
	if (!win) return;
}

/**
 * Request access to MIDI devices.
 * Requires user-initiated event.
 */
function requestMidiAccess() {
	try {
		navigator.requestMIDIAccess({
			sysex: true,
		});
	} catch {}
}

function moveWindowBounce() {
	let vx = VELOCITY * (Math.random() > 0.5 ? 1 : -1);
	let vy = VELOCITY * (Math.random() > 0.5 ? 1 : -1);

	setInterval(() => {
		const x = window.screenX;
		const y = window.screenY;
		const width = window.outerWidth;
		const height = window.outerHeight;

		if (x < MARGIN) vx = Math.abs(vx);
		if (x + width > SCREEN_WIDTH - MARGIN) vx = -1 * Math.abs(vx);
		if (y < TOP_MARGIN) vy = Math.abs(vy);
		if (y + height > SCREEN_HEIGHT - MARGIN) vy = -1 * Math.abs(vy);

		window.moveBy(vx, vy);
	}, TICK_LENGTH);
}
function isParentSameOrigin() {
	try {
		// May throw an exception if `window.opener` is on another origin
		return window.opener.location.origin === window.location.origin;
	} catch (err) {
		return false;
	}
}
