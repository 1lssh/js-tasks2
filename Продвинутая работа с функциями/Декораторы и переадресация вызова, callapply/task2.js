function delay(func, ms) {
	function wrapper(...args) {
		return setTimeout(func.apply(this, args), ms)
	}
	return wrapper
}