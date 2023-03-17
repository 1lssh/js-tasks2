let form = document.forms.calculator;
let moneyBefore = document.getElementById('money-before');
let moneyAfter = document.getElementById('money-after');
let initial = form.money;
let years = form.months;
let interest = form.interest

function calculate() {
	moneyBefore.textContent = initial.value
	let result = Math.round(initial.value * (1 + interest.value / 100) ** (years.value / 12));
	moneyAfter.textContent = result;
}

initial.oninput = calculate
years.oninput = calculate
interest.oninput = calculate