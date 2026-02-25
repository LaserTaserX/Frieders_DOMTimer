const start = document.getElementById('startTimer');
const stop = document.getElementById('stopTimer');
const reset = document.getElementById('resetTimer');
const display = document.getElementById('timerDisplay');

let seconds = 0;
let time = null;
const interval = 1000;
start.addEventListener('click', startTimer);
stop.addEventListener('click', stopTimer);
reset.addEventListener('click', resetTimer);

function startTimer() {
    if (time === null) {
        time = setInterval(() => {
            seconds++;
            display.innerHTML = seconds;
        }, interval);
    }
}

function stopTimer() {
    clearInterval(time);
    time = null;
}

function resetTimer() {
    clearInterval(time);
    time = null;
    seconds = 0;
    display.innerHTML = seconds;
}