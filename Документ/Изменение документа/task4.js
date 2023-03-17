let lis = document.getElementsByTagName('li');

for (let li of lis) {
	let liChildren = li.getElementsByTagName('li').length;
	if (!liChildren) continue;

	li.firstChild.data += `[ ${liChildren} ]`;
}