function makeArmy() {
	let shooters = [];

	let i = 0;
	while (i < 10) {
		let shooter = function () {
			let num = i
			return function () {
				return (num);
			}

		};
		shooters.push(shooter());
		i++;
	}

	return shooters;
}

let army = makeArmy();

console.log(army[0]())
console.log(army[5]()) 