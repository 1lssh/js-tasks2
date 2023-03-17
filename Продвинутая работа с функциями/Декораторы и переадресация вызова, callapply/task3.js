function debounce(f, ms) {
	let time;
	return function () {
		if ((Date.now() - time) < ms) {
			return;
		}
		time = Date.now();
		f.call(this, ...arguments);
	}
}
