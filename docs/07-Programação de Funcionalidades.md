# Programação de Funcionalidades

Apresentamos nesta seção as telas desenvolvidas para as funcionalidades do site.

![alt text](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t2-tomate/blob/main/docs/img/print%20pagina%20inteira_1.PNG)

### Adicionar Tarefas (RF-01)
![alt text](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t2-tomate/blob/main/docs/img/RF-01%20-%20print%20tela.PNG)

A tela principal apresenta no canto inferior esquerdo a opção de "adicionar tarefas".

### Requisitos Atendidos

- RF-01

### Artefatos da funcionalidade

- index html
- style.css

### Estrutura de Dados

![alt text](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t2-tomate/blob/main/docs/img/RF-01%20C%C3%B3digo.jpg)

### Instruções para Uso

O usuário entrará dentro do site. Napágina inicial, no canto inferior esquerdo, haverá um botão escrito adicionar tarefas. Ao clicar nesse botão, irá aparecer a opção para digitar o nome da tarefa que o usuário quiser adicionar. Após esta etapa, a tarefa estará criada e o usuário terá a liberdade de adicionar, ou não, mais tarefas.

## Timer (RF-02, RF 05 e RF-09)

![alt text](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t2-tomate/blob/main/docs/img/RF02-RF09.png)

![alt text](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t2-tomate/blob/main/docs/img/RF05.png)

A tela principal apresenta um timer em seu centro, juntamente com seus botões de iniciar e reset, para que o usuario possa cronometrar seu tempo no ciclo do pomodoro.

### Requisitos Atendidos

- RF-02
- RF-05
- RF-09

### Artefatos da Funcionalidade

- index html
- style.css
- script.js

### Estrutura de Dados

![alt text](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t2-tomate/blob/main/docs/img/RF02-RF05-RF09-codigo.png)
![alt text](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t2-tomate/blob/main/docs/img/script-timer.png)
![alt text](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t2-tomate/blob/main/docs/img/script-timer2.png)

### Instruções para Uso

Ao clicar no botão de iniciar (botão azul), o timer de 25 minutos ira começar uma contagem regressiva, representando o seu tempo em tarefa, ao chegar em 00:00, um novo timer de 5 minutos ira iniciar, representando o seu tempo de descanso. Ao ser zerado, o timer retorna aos 25 minutos, é pausado e incrementa 1 ao contador, aguardando que um novo ciclo seja iniciado pelo usuario. Como no pomodoro, não podemos dar uma pausa no meio da tarefa, então criamos o botão reset (botão vermelho) para que se o usuario julgue necessario dar uma pausa, ele resete o timer e ao retonar inicie novamente desde os 25 minutos. 

## Dicas para Descanso (RF-07)

![alt text](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t2-tomate/blob/main/docs/img/RF-07%20print.png)

A tela principal apresenta em seu canto superior esquerdo, um menu para acessar dicas de descanso. 

### Requisitos Atendidos

- RF-07

### Artefatos da Funcionalidade

- index html
- style.css

### Estrutura de Dados

![alt text](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t2-tomate/blob/main/docs/img/RF-07%20codigo.PNG)
![alt text](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t2-tomate/blob/main/docs/img/Alongamento%20-%20c%C3%B3digo.PNG)

### Instruções para Uso

Passar o mouse no ícone que se encontra no canto superior esquerdo do site e selecionar a opção "ALONGAMENTO". Uma nova aguia será aberta e exibirá um vídeo.
![alt text](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t2-tomate/blob/main/docs/img/Alongamento%20-%20print.PNG)


Passar o mouse no ícone que se encontra no canto superior esquerdo do site e selecionar a opção "Respiração". Uma nova aguia será aberta e exibirá um vídeo.
![alt text](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t2-tomate/blob/main/docs/img/Tela%20-%20Respira%C3%A7%C3%A3o.jpeg)





 




<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo

> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)
