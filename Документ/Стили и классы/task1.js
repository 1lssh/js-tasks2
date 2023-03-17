function showNotification({ top = 0, right = 0, className, html }) {
	let notification = document.createElement('div');
	notification.className = 'notification';
	notification.classList.add(className);
	notification.innerHTML = html;
	notification.style.cssText = `right: ${right}px;
	top: ${top}px`;
	document.body.append(notification)
	setTimeout(() => notification.remove(), 1500);
}