function createCalendar(elem, year, month) {
	let date = new Date(year, month - 1);
	let table = document.createElement('table');
	elem.append(table);
	let tbody = document.createElement('tbody');
	table.append(tbody);
	for (let i = 1; i < 8; i++) {
		let tr = document.createElement('tr');
		tbody.append(tr);
		for (let k = 1; k < 8; k++) {
			if (i == 1) break;
			let td = document.createElement('td');
			tr.append(td);
		}
		for (let j = 1; j < 8; j++) {
			if (i < 2) {
				let th = document.createElement('th');
				tr.append(th);
			}
		}
	}
	let daysName = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

	for (let i = 0; i < 7; i++) {
		tbody.firstElementChild.children[i].textContent = daysName[i];
	}

	let testDate = new Date(year, date.getMonth() + 1, 0);
	let numberOfDays = testDate.getDate();
	let weekDay = (date.getDay() == 0) ? 7 : date.getDay();

	let tdAll = document.querySelectorAll('td');

	for (let day = 1; day <= numberOfDays; day++) {
		tdAll[weekDay - 1].textContent = day;
		weekDay++;
	}

	if (!tbody.lastElementChild.firstElementChild.firstChild) {
		tbody.lastElementChild.hidden = true;
	}
}
createCalendar(calendar, 2012, 9);