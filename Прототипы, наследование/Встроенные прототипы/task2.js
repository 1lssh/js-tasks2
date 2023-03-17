Function.prototype.defer = function (ms) {
	let func = this;
	return function (...args) {
		setTimeout(() => func.apply(this, args), ms);
	}
};

function func(a, b) {
	console.log(a + b);
}

func.defer(1000)(1, 2);