//Variaveis de botão do timer
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
    if(posContador>0){
        if(auxTimer === undefined){
            auxTimer = setInterval(timer, 1000);
        }/*else {
            alert("O timer já iniciou");
        } -> acaba sendo uma forma de pausar o timer
        */    
    }else{
        alert('Selecione a tarefa')
    }
})

reset.addEventListener('click', function(){
    reset_timer()
})

function reset_timer(){
    t_minutos.innerText = "00";//25
    t_segundos.innerText = "15";//00
    stopInterval();
    auxTimer = undefined;
}

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
        t_minutos.innerText = "00";
        t_segundos.innerText = "10";//0
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
        t_minutos.innerText = "00";//25
        t_segundos.innerText = "15";//00
        auxDescanso = 0;
        auxContador++;
        imprimeContador(posContador)
        stopInterval()
    }
}

//Passa a posição em que o contador deve atuar
var posContador = 0;
function set_contador(positionSetContador){
    posContador = positionSetContador;
    return posContador;
}

//Faz com que crie as imagens
function imprimeContador(posicao){
    var contador_tarefa = document.getElementById('contador_tarefa'+posicao);
    var elemento_img = document.createElement('img');
    elemento_img.setAttribute('src', '/style/img/logo.png');
    elemento_img.setAttribute('alt', 'toamte');
    elemento_img.setAttribute('class', 'img_tarefa');

    contador_tarefa.appendChild(elemento_img);

    reset_timer();
}


//Função de pause

function stopInterval(){
    clearInterval(auxTimer);
}

//Add e Remover tarefas

var botao_add = document.getElementById('button_add');
var box = document.getElementById('box');
var contadorAddTarefa = 0;

botao_add.addEventListener('click', function(){
    contadorAddTarefa++;
    createInput(); 
})


function createInput(){
    var elemento_input = document.createElement('input')
    var elemento_check = document.createElement('input')
    var elemento_remove = document.createElement('button');
    var elemento_div_input = document.createElement('div');
    var elemento_div_contador = document.createElement('div');

    elemento_check.setAttribute('type', 'radio');
    elemento_check.setAttribute('id', 'check_tarefa'+contadorAddTarefa);
    elemento_check.setAttribute('value', 'check_tarefa'+contadorAddTarefa);
    elemento_check.setAttribute('name', 'check_tarefa');
    elemento_check.setAttribute('onclick', 'set_contador('+contadorAddTarefa+')');

    elemento_input.setAttribute('type', 'text');
    elemento_input.setAttribute('name', 'tarefa');
    elemento_input.setAttribute('id', 'input_tarefa'+contadorAddTarefa);
    elemento_input.setAttribute('class', 'input_tarefa');
    elemento_input.setAttribute('placeholder', 'TAREFA');
    
    elemento_remove.setAttribute('type', 'button');
    elemento_remove.setAttribute('id', 'button_remove'+contadorAddTarefa);
    elemento_remove.setAttribute('onclick', 'removeMateria('+contadorAddTarefa+')');
    elemento_remove.setAttribute('class', 'button_remove');
    elemento_remove.textContent = 'X';
    
    elemento_div_input.setAttribute('id', 'box'+contadorAddTarefa)
    elemento_div_input.setAttribute('class', 'add_tarefa');
    
    elemento_div_contador.setAttribute('id', 'contador_tarefa'+contadorAddTarefa);

    form1.appendChild(elemento_div_input);
    elemento_div_input.appendChild(elemento_check);
    elemento_div_input.appendChild(elemento_input);
    elemento_div_input.appendChild(elemento_remove);
    elemento_div_input.appendChild(elemento_div_contador);
}

function removeMateria(idContador){
    elemento_remove = document.getElementById('box'+idContador).remove();
    idContador=0;
    posContador=0
    reset_timer();
}

//modal para editar pomodoro
function modal_pomodoro(){
    document.getElementById('modal_edit_pomodoro').style.display = 'block';
}


// Edição do pomodoro

//Variavel para aplicar mudançãs

var apply = document.getElementById('aplicar_mudancas');

apply.addEventListener('click', function(){
    document.getElementById('modal_edit_pomodoro').style.display = 'none';
})