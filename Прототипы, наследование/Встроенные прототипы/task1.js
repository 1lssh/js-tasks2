Function.prototype.defer = function (ms) {
	setTimeout(this, ms);
};

function func() {
	console.log("Hello!");
}

func.defer(1000);