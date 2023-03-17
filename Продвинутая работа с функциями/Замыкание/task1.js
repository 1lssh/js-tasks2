function sum(a) {
	return function (b) {
		return b + a
	}
}

console.log(sum(5)(-3))