mouse.addEventListener('click', function () {
	mouse.setAttribute('tabindex', '0');
	mouse.focus();
	mouse.style.position = 'absolute';

	mouse.addEventListener('keydown', function (event) {
		if (event.key == 'ArrowUp') {
			mouse.style.top = mouse.getBoundingClientRect().top - mouse.offsetHeight + 'px';
		} else if (event.key == 'ArrowRight') {
			mouse.style.left = mouse.getBoundingClientRect().left + mouse.offsetWidth + 'px';
		} else if (event.key == 'ArrowDown') {
			mouse.style.top = mouse.getBoundingClientRect().top + mouse.offsetHeight + 'px';
		} else if (event.key == 'ArrowLeft') {
			mouse.style.left = mouse.getBoundingClientRect().left - mouse.offsetWidth + 'px';
		};
	});
});