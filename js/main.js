const $ = (query) => document.querySelectorAll(query);


function toggleMobileNav() {
	const mobileNav = $('#mobile-nav')[0];
	mobileNav.classList.toggle('mobile-navigation-links--opened');
}

$('a').forEach((anchor) => { // todas as tags 'a' tem o evento de click
	anchor.addEventListener('click', (event) => {
		event.preventDefault();
		$('#mobile-nav')[0].classList.remove('mobile-navigation-links--opened');
		const target = event.target.getAttribute('href') ??
			event.target.parentElement.getAttribute('href');
		smoothScroll(target);
	});
})

function smoothScroll(query) {
	const targetElement = $(query)[0];
	const startPosition = window.pageYOffset;
	const targetPosition = targetElement.offsetTop;
	const distance = targetPosition - startPosition;
	const duration = 300; // ms

	let start = null;
	window.requestAnimationFrame(step);

	function step(timestamp) {
		if (!start) start = timestamp;
		const progress = timestamp - start;

		window.scrollTo(0, easeInOut(startPosition, distance, progress, duration));

		if (progress < duration) {
			window.requestAnimationFrame(step);
		}
	}

	function easeInOut(start, distance, progress, duration) {
		progress /= duration / 2;
		if (progress < 1) return distance / 2 * progress * progress + start;
		progress--;
		return -distance / 2 * (progress * (progress - 2) - 1) + start;
	}
}
