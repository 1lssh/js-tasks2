let hour = document.querySelector('.hour');
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');

let startBtn = document.querySelector('.startBtn')
let stopBtn = document.getElementById('stopBtn')

let timer

function updateClock() {
	let hours = new Date().getHours();
	if (hours < 10) hours = '0' + hours;
	let minutes = new Date().getMinutes();
	if (minutes < 10) minutes = '0' + minutes;
	let seconds = new Date().getSeconds();
	if (seconds < 10) seconds = '0' + seconds;
	hour.innerHTML = hours;
	sec.innerHTML = seconds;
	min.innerHTML = minutes;
}

function startClock() {
	updateClock()
	timer = setInterval(updateClock, 1000)
}

function stopClock() {
	clearInterval(timer)
}

startBtn.onclick = () => {
	startClock()
}

stopBtn.onclick = () => {
	stopClock()
}
