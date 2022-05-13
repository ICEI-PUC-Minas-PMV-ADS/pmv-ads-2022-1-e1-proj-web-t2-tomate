//Variaveis de botão
var iniciar = document.getElementById('iniciar');
var reset = document.getElementById('reset');

//variaveis do timer
var t_minutos = document.getElementById('tarefa_minutos');
var t_segundos = document.getElementById('tarefa_segundos');

//variaveis do timer de descanço
var auxDescanso = 0;
var auxContador = 1;

//Timer
var auxTimer

iniciar.addEventListener('click', function(){
    if(auxTimer === undefined){
        auxTimer = setInterval(timer, 1000);
    }/*else {
        alert("O timer já iniciou");
    } -> acaba sendo uma forma de pausar o timer
    */
})

reset.addEventListener('click', function(){
    t_minutos.innerText = 25;
    t_segundos.innerText = "00";
    stopInterval();
    auxTimer = undefined;
})


function timer(){

    //trabalho
    if(t_segundos.innerText != 0){
        t_segundos.innerText--;
        if(t_segundos.innerText < 10){
            t_segundos.innerText = '0'+ t_segundos.innerText;
        }
    }else if(t_minutos.innerText != 0 && t_segundos.innerText == 0){
        t_segundos.innerText = 59;
        t_minutos.innerText--;
        if(t_minutos.innerText < 10){
            t_minutos.innerText = '0'+ t_minutos.innerText;
        }
    }

    //descanço
    if(t_minutos.innerText == 0 && t_segundos.innerText == 0 && auxDescanso == 0 && auxContador != 0){
        t_minutos.innerText = 5;
        t_segundos.innerText = "00";
        if(t_segundos.innerText != 0){
            t_segundos.innerText--;
            if(t_segundos.innerText < 10){
                t_segundos.innerText = '0'+ t_segundos.innerText;
            }
        }else if(t_minutos.innerText != 0 && t_segundos.innerText == 0){
            t_segundos.innerText = 59;
            t_minutos.innerText--;
            if(t_minutos.innerText < 10){
                t_minutos.innerText = '0'+ t_minutos.innerText;
            }
        }
        auxDescanso++;   
    }

    //contador pomodoro
    if(t_minutos.innerText == 0 && t_segundos.innerText == 0 && auxDescanso != 0){
        t_minutos.innerText = 25;
        t_segundos.innerText = "00";
        document.getElementById('contador').innerText++;
        auxDescanso = 0;
        auxContador++;
        stopInterval()
    }
}

//Função de pause

function stopInterval(){
    clearInterval(auxTimer);
}