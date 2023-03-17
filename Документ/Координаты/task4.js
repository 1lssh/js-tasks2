function getCoords(elem) {
	let box = elem.getBoundingClientRect();

	return {
		top: box.top,
		left: box.left
	};
}

function showNote(anchor, position, html) {

	let note = document.createElement('div');
	note.className = "note";
	note.innerHTML = html;
	document.body.append(note);

	positionAt(anchor, position, note);
}

function positionAt(anchor, position, elem) {

	let anchorCoords = getCoords(anchor);

	if (position == 'top-out') {
		elem.style.left = anchorCoords.left + 'px';
		elem.style.top = anchorCoords.top - elem.offsetHeight + 'px';
	}
	if (position == 'right-out') {
		elem.style.left = anchorCoords.left + anchor.offsetWidth + 'px';
		elem.style.top = anchorCoords.top + 'px';
	}
	if (position == 'bottom-out') {
		elem.style.left = anchorCoords.left + 'px';
		elem.style.top = anchorCoords.top + anchor.offsetHeight + 'px';
	}
	if (position == 'top-in') {
		elem.style.left = anchorCoords.left + "px";
		elem.style.top = anchorCoords.top + "px";
	}
	if (position == 'right-in') {
		elem.style.width = '150px';
		elem.style.left = anchorCoords.left + anchor.offsetWidth - elem.offsetWidth + "px";
		elem.style.top = anchorCoords.top + "px";
	}
	if (position == 'bottom-in') {
		elem.style.left = anchorCoords.left + "px";
		elem.style.top = anchorCoords.top + anchor.offsetHeight - elem.offsetHeight + "px";
	}

}


let blockquote = document.querySelector('blockquote');

showNote(blockquote, "top-in", "note top-in");
showNote(blockquote, "top-out", "note top-out");
showNote(blockquote, "right-out", "note right-out");
showNote(blockquote, "bottom-in", "note bottom-in");