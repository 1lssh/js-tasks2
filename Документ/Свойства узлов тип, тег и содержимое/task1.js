for (let li of document.querySelectorAll('li')) {
	let title = li.firstChild.data;
	let count = li.getElementsByTagName('li').length;
	console.log(title + ': ' + count);
}