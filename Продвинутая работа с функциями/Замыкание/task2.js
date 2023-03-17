let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
	return function (arr) {
		return arr >= a && arr <= b
	}
}

function inArray(arr) {
	return function (arr2) {
		return arr.includes(arr2)
	}
}