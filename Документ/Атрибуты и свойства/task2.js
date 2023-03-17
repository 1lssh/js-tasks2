let links = document.querySelectorAll('a');

for (let link of links) {
	let href = link.getAttribute('href');
	if (!href) continue;
	if (href.includes('://') && !href.startsWith('http://internal.com')) {
		link.style.color = 'orange';
	}
}