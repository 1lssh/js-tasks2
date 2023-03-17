function fib(n) {

	let result = number(1, 1, n);

	function number(first, second, n) {
		if (n === 2 || n === 1) {
			return second;
		} else {
			return number(second, (first + second), n - 1);
		}
	}

	return result;
}