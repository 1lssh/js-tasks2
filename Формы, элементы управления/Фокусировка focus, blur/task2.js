let table = document.getElementById('bagua-table');

let info = null;

let textarea = document.createElement('textarea');
textarea.className = 'txt';

let okButton = document.createElement('button');
okButton.textContent = 'ok';

let cancelButton = document.createElement('button');
cancelButton.textContent = 'cancel'

let editMode = false;

table.onclick = function (event) {

	if (editMode == true) return;

	let currentTd = event.target.closest('td');
	textarea.value = currentTd.innerHTML;
	currentTd.replaceWith(textarea);
	textarea.focus();

	document.body.append(okButton);
	okButton.style.top = textarea.getBoundingClientRect().bottom - 1 + 'px';
	okButton.style.left = textarea.getBoundingClientRect().left + 2 + 'px'

	document.body.append(cancelButton);
	cancelButton.style.top = textarea.getBoundingClientRect().bottom - 1 + 'px';
	cancelButton.style.left = okButton.getBoundingClientRect().right + 'px';


	okButton.onclick = function () {
		info = textarea.value
		currentTd.innerHTML = info;
		textarea.replaceWith(currentTd);
		okButton.remove()
		cancelButton.remove()
		editMode = false
	}
	cancelButton.onclick = function () {
		textarea.replaceWith(currentTd);
		okButton.remove()
		cancelButton.remove();
		editMode = false
	}

	editMode = true;
}