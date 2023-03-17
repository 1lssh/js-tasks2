contents.addEventListener('click', (event) => {
	let target = event.target.closest('a');
	if (target && contents.contains(target)) {
		let isLeaving = confirm(`Leave to ${target.getAttribute('href')}?`);
		if (!isLeaving) {
			event.preventDefault();
		}
	}
});