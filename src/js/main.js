"use strict";

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
let cron;
let contPomodoroEstudo = 0;
let contPomodoroDescanso = 0;

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();


function start() {
    pause();
    cron = setInterval(() => { timer(); }, 10);
}
function pause() {
    clearInterval(cron);
}
function reset() {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById('hour').innerText = '00';
    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
    document.getElementById('millisecond').innerText = '000';
}
function timer() {
    if ((millisecond += 10) == 1000) {
        millisecond = 0;
        second++;
    }
    if (second == 60) {
        second = 0;
        minute++;
    }
    if (minute == 60) {
        minute = 0;
        hour++;
    }
    document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
    document.getElementById('millisecond').innerText = returnData(millisecond);
    document.getElementById('contador_tarefas').innerText = returnData(contPomodoroEstudo);
    document.getElementById('contador_descanso').innerText = returnData(contPomodoroDescanso);
    pomodoro(); //Chamada da funcao para pausar aos 25 min
}
function pomodoro() {
    if (contPomodoroDescanso == contPomodoroEstudo) {
        if /*(minute == 25)*/ (second== 4) {
            pause();
            reset();
            start();
            contPomodoroEstudo++;
        }
    }
    else {
        if /*(minute == 5) */ (second== 3) {
            pause();
            reset();
            start();
            contPomodoroDescanso++;
        }
    }
}


function returnData(input) {
    return input > 10 ? input : `0${input}`
}

/* 
    1- a) Quando o cronometro chega no 25 ele para : icone surgira para indicar *aviso sonoro.

    b) Automaticamente virar o cronometro de 5: icone surgira para indicar *aviso sonoro.
    c) 

    2- Primeiro, segundo e terceiro pomodoro intervalo curto, a partir do quarto intervalo longo.


*/