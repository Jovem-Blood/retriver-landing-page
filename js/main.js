const $ = (query) => document.querySelectorAll(query);


function toggleMobileNav() {
	const mobileNav = $('#mobile-nav')[0];
	mobileNav.classList.toggle('mobile-navigation-links--opened');
	console.log(mobileNav)
}

