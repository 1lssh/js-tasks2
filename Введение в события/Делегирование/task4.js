document.addEventListener('mouseover', addTooltip);
document.addEventListener('mouseout', removeTooltip);
let tooltip = document.createElement('div');

function addTooltip(event) {
	if (event.target.tagName === 'BUTTON') {
		let button = event.target;
		let tooltipContent = event.target.dataset.tooltip;
		tooltip.className = 'tooltip';
		tooltip.innerHTML = tooltipContent;
		document.body.append(tooltip);

		let coords = button.getBoundingClientRect();
		let top = coords.top - tooltip.offsetHeight - 5;
		if (top < 0) {
			top = coords.top + button.offsetHeight + 5;
		}
		let left = coords.left + (button.offsetWidth - tooltip.offsetWidth) / 2;
		if (left < 0) { left = 0 }

		tooltip.style.top = top + 'px';
		tooltip.style.left = left + 'px';
	}
}

function removeTooltip() {
	tooltip.remove();
}