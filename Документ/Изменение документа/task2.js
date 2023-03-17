while (true) {
	let text = prompt('введите текст', '');
	if (!text) break;
	let li = document.createElement('li');
	li.textContent = text;
	ul.append(li);
}