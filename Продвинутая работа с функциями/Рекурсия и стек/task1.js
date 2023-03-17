function sumTo(n) {
	let result = 0;
	for (let i = n; i > 0; i--) {
		result += i;
	}
	return result
}

function sumTo(n) {
	return n == 1 ? n : n + sumTo(n - 1)
}

function sumTo(n) {
	return n * (n + 1) / 2;
}


console.log(sumTo(100))