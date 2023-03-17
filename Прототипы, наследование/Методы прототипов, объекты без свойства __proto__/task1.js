dictionary.toString = function () {
	return Object.keys(this).join(',')
}

Object.defineProperty(dictionary, "toString", {
	enumerable: false
});