function Object(value) {
	this.value = value
}

let obj = new Object(12);
let obj2 = new obj.constructor(34);

console.log(obj2.value)



function Object1(value) {
	this.value = value
}

Object1.prototype = {};

let object = new Object1(12);
let object2 = new object.constructor(34);

console.log(object2.value)

