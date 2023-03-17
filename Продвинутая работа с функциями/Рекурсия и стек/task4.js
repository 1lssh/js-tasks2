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

function printList(list) {
	if (list.next !== null) {
		console.log(list.value)
		list = list.next
		printList(list)
	} else {
		console.log(list.value)
	}
}

function printList(list) {

	while (list) {
		console.log(list.value);
		list = list.next;
	}

}



console.log(printList(list))