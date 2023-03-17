let selected = genres.options[genres.selectedIndex];
console.log(selected.text)
console.log(selected.value)

let option = new Option('Классика', 'classic', true, true)
genres.append(option)