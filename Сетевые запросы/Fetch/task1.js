async function getUsers(names) {
	let arr = [];
	for (let name of names) {
		let response = await fetch(`https://api.github.com/users/${name}`);
		if (response.ok) {
			let result = await response.json();
			arr.push(result);
		}
	}

	return arr;
}