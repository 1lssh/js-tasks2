function printNumbers(from, to) {
	let num = from;
	let timer = setInterval(function () {
		if (num == to) {
			console.log(num)
			clearInterval(timer)
		} else {
			console.log(num++);
		}
	}, 1000)
}

function printNumbers(from, to) {
	let num = from;
	setTimeout(function timer() {
		if (num == to) {
			console.log(num)
			clearTimeout(timer)
		} else {
			console.log(num++);
			setTimeout(timer, 1000)
		}
	}, 1000)
}


console.log(printNumbers(12, 15))