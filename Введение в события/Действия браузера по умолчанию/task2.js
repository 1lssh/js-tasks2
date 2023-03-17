thumbs.onclick = function (event) {
	let currentImage = event.target.closest('a');
	largeImg.src = currentImage.href;
	event.preventDefault();
}