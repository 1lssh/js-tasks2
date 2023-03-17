document.getElementById('grid').addEventListener('click', function (event) {
if (event.target.tagName !== 'TH') return

const th = event.target
const type = th.dataset.type
const index = th.cellIndex

for (let tBody of this.tBodies) {
const rows = Array.from(tBody.rows)
rows.sort((tr1, tr2) => {
const val1 = tr1.cells[index].textContent
const val2 = tr2.cells[index].textContent
return type === 'number' ? parseFloat(val1) > parseFloat(val2) ? 1 : -1 : val1.localeCompare(val2)
})
tBody.append(...rows)
}
})