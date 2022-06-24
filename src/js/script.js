//variaveis do timer
let minute = document.getElementById('select_tarefa').value;//25 
let minute_descanso = document.getElementById('select_descanso').value;//5 
let second = 0;
let auxMinute = 25;
let auxMinute_descanso = 5;
let auxSecond = 0;
let auxCancel = 0;

//variaveis do timer de descanso
let auxDescanso = 0;

//Variavel do som
var sino = document.querySelector('audio');

//Timer
let auxTimer;

function iniciar() {
    if (posContador > 0 && auxCancel == 0 || posContador > 0 && auxCancel == 1) {
        if (auxTimer === undefined) {
            auxTimer = setInterval(timer, 1000);
        }
        auxCancel = 0;
    } else if (posContador == 0 && auxCancel == 1) {
        auxCancel = 0;
        pause();
    }
    else {
        alert('Selecione a tarefa')
    }
}

//Função de pause
function pause() {
    clearInterval(auxTimer);
}

//Função de reset
function reset_timer() {
    pause();
    minute = document.getElementById('select_tarefa').value;//25
    second = 0;//0
    minute_descanso = document.getElementById('select_descanso').value;
    document.getElementById('tarefa_minutos').innerHTML = returnData(minute);
    document.getElementById('tarefa_segundos').innerHTML = '00';
    document.getElementById('tomate_task').style.display = 'block';
    document.getElementById('tomate_break').style.display = 'none';
    auxTimer = undefined;
    auxDescanso = 0
    auxMinute = minute;
    auxMinute_descanso = minute_descanso;
    auxSecond = second;
}

function timer() {

    //trabalho
    if (auxDescanso == 0) {
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
    }

    //Sinal de intervalo e inicio do descanso
    if (second == 0 && minute == 0 && auxDescanso == 0) {
        auxDescanso = 1;
        sino.play();
        document.getElementById('tomate_task').style.display = 'none';
        document.getElementById('tomate_break').style.display = 'block';
    }

    //descanso
    if (auxDescanso == 1) {
        if (second != 0) {
            second--;
            auxSecond = second
        }
        if (second == 0 && minute_descanso != 0) {
            second = 59;
            minute_descanso--;
            auxMinute_descanso = minute_descanso;
        }

        document.getElementById('tarefa_minutos').innerHTML = returnData(minute_descanso);
        document.getElementById('tarefa_segundos').innerHTML = returnData(second);
    }

    //contador pomodoro
    if (second == 0 && minute_descanso == 0 && auxDescanso == 1) {
        imprimeContador(posContador);
        reset_timer();
    }


}

function returnData(input) {
    return input >= 10 ? input : `0${input}`
}

//Passa a posição em que o contador deve atuar
let posContador = 0;
function set_contador(positionSetContador) {
    posContador = positionSetContador;
    elemento_check = document.getElementById('check_tarefa' + posContador).checked = true;
    return posContador;

}

//Faz com que crie as imagens

function imprimeContador(posicao) {
    sino.play();
    var contador_tarefa = document.getElementById('contador_tarefa' + posicao);
    var elemento_img = document.createElement('img');
    elemento_img.setAttribute('src', './style/img/logo.png');
    elemento_img.setAttribute('alt', 'tomate');
    elemento_img.setAttribute('class', 'img_tarefa');

    contador_tarefa.appendChild(elemento_img);
}

//Add e Remover tarefas

let botao_add = document.getElementById('button_add');
let box = document.getElementById('box');
let contadorAddTarefa = 0;

botao_add.addEventListener('click', function () {
    contadorAddTarefa++;
    createInput();
})


function createInput() {
    var elemento_input = document.createElement('input')
    var elemento_check = document.createElement('input')
    var elemento_remove = document.createElement('button');
    var elemento_div_input = document.createElement('div');
    var elemento_div_contador = document.createElement('div');

    elemento_check.setAttribute('type', 'radio');
    elemento_check.setAttribute('id', 'check_tarefa' + contadorAddTarefa);
    elemento_check.setAttribute('value', 'check_tarefa' + contadorAddTarefa);
    elemento_check.setAttribute('name', 'check_tarefa');
    elemento_check.setAttribute('style', 'display: none');


    elemento_input.setAttribute('type', 'text');
    elemento_input.setAttribute('name', 'tarefa');
    elemento_input.setAttribute('id', 'input_tarefa' + contadorAddTarefa);
    elemento_input.setAttribute('class', 'input_tarefa');
    elemento_input.setAttribute('placeholder', 'TAREFA');
    elemento_input.setAttribute('onclick', 'set_contador(' + contadorAddTarefa + ')');


    elemento_remove.setAttribute('type', 'button');
    elemento_remove.setAttribute('id', 'button_remove' + contadorAddTarefa);
    elemento_remove.setAttribute('onclick', 'removeMateria(' + contadorAddTarefa + ')');
    elemento_remove.setAttribute('class', 'button_remove');
    elemento_remove.textContent = 'X';

    elemento_div_input.setAttribute('id', 'box' + contadorAddTarefa)
    elemento_div_input.setAttribute('class', 'add_tarefa');

    elemento_div_contador.setAttribute('id', 'contador_tarefa' + contadorAddTarefa);

    form1.appendChild(elemento_div_input);
    elemento_div_input.appendChild(elemento_check);
    elemento_div_input.appendChild(elemento_input);
    elemento_div_input.appendChild(elemento_remove);
    elemento_div_input.appendChild(elemento_div_contador);
}

function removeMateria(idContador) {
    remove_campo = document.getElementById('box' + idContador)
    verifica_selecao = document.getElementById('check_tarefa' + idContador)
    if (verifica_selecao.checked == true && auxTimer != undefined) {
        alert("Não é possivel remover a tarefa! Timer ainda em contagem.")
    } else if (verifica_selecao.checked == true && auxTimer === undefined) {
        remove_campo.remove();
        idContador = undefined;
        posContador = 0
        reset_timer();
    } else if (verifica_selecao.checked == false) {
        remove_campo.remove();
    }
}


//modal para editar pomodoro
function modal_pomodoro() {
    document.getElementById('modal_edit_pomodoro').style.display = 'block';
    pause();
    auxCancel = 1
}


// Edição do pomodoro

function apply() {
    document.getElementById('modal_edit_pomodoro').style.display = 'none';
    auxTimer = undefined;
    reset_timer();
}

function cancel() {
    document.getElementById('modal_edit_pomodoro').style.display = 'none';
    var elemento_select_tarefa = document.getElementById("select_tarefa");
    var elemento_select_descanso = document.getElementById("select_descanso");

    if (elemento_select_tarefa.selectedIndex == "0") {
        document.getElementById("select_tarefa").selectedIndex = "0";
    } else {
        document.getElementById("select_tarefa").selectedIndex = "1";
    }

    if (elemento_select_descanso.selectedIndex == "0") {
        document.getElementById("select_descanso").selectedIndex = "0";
    } else {
        document.getElementById("select_descanso").selectedIndex = "1";
    }

    minute = auxMinute;
    second = auxSecond;
    minute_descanso = auxMinute_descanso;
    auxTimer = undefined;
    iniciar();
}


