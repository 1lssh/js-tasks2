let table = document.getElementById('table');
let tBody = table.getElementsByTagName('tbody')[0];
let tableRows = tBody.getElementsByTagName('tr')
let sorted = Array.from(tableRows).sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);
tBody.append(...sorted);