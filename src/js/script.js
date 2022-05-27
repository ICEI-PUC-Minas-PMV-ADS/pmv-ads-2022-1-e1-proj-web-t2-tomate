

//variaveis do timer
let minute = document.getElementById('select_tarefa').value;//25 
let minute_descanso = document.getElementById('select_descanco').value;//5 
let auxMinute;
let auxMinute_descanso;
let auxSecond;


//variaveis do timer de descanço
let auxDescanso = 0;

//Variavel do som
var sino = new Audio("/style/audio/intervalo.mp3");

//Timer
let auxTimer;
let auxContador = 1;

function iniciar(){
    if(posContador>0){
        if(auxTimer === undefined){
            auxTimer = setInterval(timer, 1000);
        }
    }else{
        alert('Selecione a tarefa')
    }
}

//Função de pause
function pause(){
    clearInterval(auxTimer);
}

//Função de reset
function reset_timer() {
    pause();
    minute = document.getElementById('select_tarefa').value;//25
    second = 0;//0
    document.getElementById('tarefa_minutos').innerHTML = returnData(minute);
    document.getElementById('tarefa_segundos').innerHTML = '00';
    auxTimer = undefined;
}

function timer(){

    //trabalho
    if (second != 0) {
        second--;
        auxSecond = second
    }
    if (second == 0 && minute != 0) {
        second = 59;
        minute--;
        auxMinute = minute;
    }

    document.getElementById('tarefa_minutos').innerHTML = returnData(minute);
    document.getElementById('tarefa_segundos').innerHTML = returnData(second);

    //descanço
    if (second == 0 && minute == 0 && auxDescanso == 0){
        sino.play();
        second = 0;//0

        if (second != 0) {
            second--;
            auxSecond = second
        }
        if (second == 0) {
            second = 59;
            minute_descanso--;
            auxMinute_descanso = minute_descanso;
        }

        document.getElementById('tarefa_minutos').innerHTML = returnData(minute_descanso);
        document.getElementById('tarefa_segundos').innerHTML = returnData(second);
        auxDescanso = 1;
    }
    //contador pomodoro
    if(second == 0 && minute == 0 && auxDescanso == 1){
        auxDescanso = 0;
        auxContador++;
        imprimeContador(posContador);
        pause();
    }
}
function returnData(input) {
    return input >= 10 ? input : `0${input}`
}

//Passa a posição em que o contador deve atuar
let posContador = 0;
function set_contador(positionSetContador){
    posContador = positionSetContador;
    return posContador;
}

//Faz com que crie as imagens

function imprimeContador(posicao){
    sino.play();
    var contador_tarefa = document.getElementById('contador_tarefa'+posicao);
    var elemento_img = document.createElement('img');
    elemento_img.setAttribute('src', '/style/img/logo.png');
    elemento_img.setAttribute('alt', 'tomate');
    elemento_img.setAttribute('class', 'img_tarefa');

    contador_tarefa.appendChild(elemento_img);
}

//Add e Remover tarefas

let botao_add = document.getElementById('button_add');
let box = document.getElementById('box');
let contadorAddTarefa = 0;

botao_add.addEventListener('click', function(){
    contadorAddTarefa++;
    createInput(); 
})


function createInput(){
    var elemento = document.createElement('input')
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
    pause();
}


// Edição do pomodoro

function apply(){
    document.getElementById('modal_edit_pomodoro').style.display = 'none';
    let volume_sino = document.getElementById('edit-pomodoro-range');
    sino.volume = (volume_sino.value)/100;
    auxTimer = undefined;
    reset_timer();
}

function cancel(){
    document.getElementById('modal_edit_pomodoro').style.display = 'none';
    document.getElementById("select_tarefa").selectedIndex = "0";
    document.getElementById("select_descanco").selectedIndex = "0";
    minute = auxMinute;
    second = auxSecond;
    minute_descanso = auxMinute_descanso;
    auxTimer = undefined;
    iniciar();
}


