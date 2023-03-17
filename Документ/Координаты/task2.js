function positionAt(anchor, position, elem) {
	let anchorCoords = anchor.getBoundingClientRect();
	if (position == "top") {
		elem.style.left = anchorCoords.left + "px";
		elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
	}
	if (position == 'bottom') {
		elem.style.left = anchorCoords.left + "px";
		elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
	}
	if (position == 'right') {
		elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
		elem.style.top = anchorCoords.top + "px";
	}
}