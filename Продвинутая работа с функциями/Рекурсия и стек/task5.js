let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null
			}
		}
	}
};

let printReverseList = (list) => {
	let arr = [list.value];
	while (list.next) {
		list = list.next;
		arr.push(list.value);
	}
	arr.reverse().map(item => console.log((item)));
}

printReverseList(list);