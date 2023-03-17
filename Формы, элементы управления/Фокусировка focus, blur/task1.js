let textValue = null;
let view = document.getElementById("view")
let textarea = document.createElement("textarea");

textarea.className = 'edit';
textarea.value = view.innerHTML;

view.onclick = function () {
	view.replaceWith(textarea)
	textarea.focus()
}
textarea.onblur = function () {
	textValue = textarea.value;
	view.innerHTML = textValue
	textarea.replaceWith(view)
}
textarea.onkeydown = function (event) {
	if (event.key == 'Enter') {
		this.blur();
	}
};