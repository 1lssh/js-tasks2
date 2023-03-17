function sum(a) {

	let currentSum = a;

	function func(b) {
		currentSum += b;
		return func;
	}

	func.toString = function () {
		return currentSum;
	};

	return func;
}

console.log(JSON.parse(sum(1)(2)));
console.log(JSON.parse(sum(5)(-1)(2)));
console.log(JSON.parse(sum(6)(-1)(-2)(-3)));
console.log(JSON.parse(sum(0)(1)(2)(3)(4)(5)));