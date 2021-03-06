# Plano de Testes de Software


## Caso de Teste CT-01 - Adicionar Tarefa

### Requisitos Associados
RF-01: O site deve apresentar na página principal a opção de inserir matérias.

### Objetivo do Teste
Verificar se o botão inserir matéria/assunto funciona corretamente.

### Passos 
1 - Acessar o Navegador

2 - Informar o endereço do site

3 - Visualizar o botão

4 - Clicar no botão "Adicionar Tarefa"

5 - Escrever o nome da tarefa

### Critérios de Êxito
Ao clicar no botão "Adicionar Tarefa", um campo deve surgir para que o usuário possa escrever o nome da tarefa.


## Caso de Teste CT-02 - Iniciar o Pomodoro

### Requisitos Associados

RF-02 - O site deve disponibilizar um cronômetro baseado no método pomodoro.

RF-09 - Após a escolha da quantidade de pomodoros, o cronômetro apresentará duas opções: Play e Reset.

### Objetivo do Teste

Verificar se o pomodoro se inicia após selecionar a tarefa a ser realizada e clicar no botão "Play".

### Passos

1 - Acessar o Navegador

2 - Informar o endereço do site

3 - Visualizar o botão "Adicionar Tarefa"

4 - Clicar no botão "Adicionar Tarefa"

5 - Escrever o nome da tarefa

6 - Clicar na caixa de seleção da tarefa para marcá-la

7 - Clicar no botão "play"


### Critérios de Êxito

O cronômetro do pomodoro deve iniciar para a tarefa selecionada.



## Caso de Teste CT-03 - Registrar o pomodoro

### Requisitos Associados

RF-03: O site deve disponibilizar um contador de pomodoros.

RF-04: O site deve associar a contagem de pomodoro a cada matéria/assunto.

RF-05: O site deve disponibilizar um cronômetro de descanso baseado no RF-04.

RF-08: O site deve disponibilizar um gráfico sumarizando o desempenho.

### Objetivo do Teste

Verificar se ao final da contagem do Pomodoro, o ícone que indica a contagem de Pomodoros se localiza no local correto. Verificar se o cronômetro de descanso se inicia após o final da contagem do tempo de Pomodoro.

### Passos

1 - Iniciar o pomodoro clicando no botão play

2 - Aguardar o contador zerar 

3 - Verificar se o ícone se apresenta a frente do campo destinado a tarefa

4 - Verificar se o cronômetro de descanso está ativo


### Critérios de Êxito

Ao final da contagem do tempo de Pomodoro, um ícone deverá se posicionar a frente do campo da tarefa que está sendo realizada e em seguida o início do cronômetro de descanso.



## Caso de Teste CT-04 - Visualisar e acessar o menu de descanso, respiração, relaxamento, alongamento e motivacional

### Requisitos Associados
RF-07: O site oferecerá como dica de descanso um exercício de respiração, relaxamento, alongamento e motivacional.

### Objetivo do Teste

Verificar se o menu de descanso, respiração, relaxamento, alongamento e motivacional funciona como o esperado.

### Passos

1 - Verificar a presença do botão de menu no canto esquerdo superior

2 - Clicar no botão e escolha uma das opções

3 - Assistir o vídeo

4 - Refazer o passo número 2 escolhendo uma opção diferente até esgotar as opções


### Critérios de Êxito

Ao escolher uma opção, uma nova página será aberta e exibirá um vídeo referente a opção escolhida

## Caso de Teste CT-05 - Selecionar a tarefa para dar início ao Pomodoro.

### Requisitos Associados

RF-04 - O site deve associar a contagem de pomodoro para casa matéria/assunto

### Objetivo do Teste

Verificar se o início da contagem do pomodoro ocorre sem uma tarefa ter sido previamente selecionada

### Passos

1 - Acessar o Navegador

2 - Informar o endereço do site

3 - Visualizar o botão "Adicionar Tarefa"

4 - Clicar no botão "Adicionar Tarefa"

5 - Escrever o nome da tarefa

6 - Clicar no botão "play"


### Critérios de Êxito

Após escrever o nome da tarefa, clicar no botão "play" para dar início ao pomodoro, a página deverá exibir uma mensagem de erro informando que a tarefa deverá ser selecionada.

## Caso de Teste CT-06 - Seleção do tempo de pomodoro e tempo de descanso.

### Requisitos Associados

RF-10 - O site deverá apresentar a opção de escolha de tempo de duração do pomodoro, 25 ou 50 minutos para a atividade e 5 ou 10 minutos para o período de descanso.

### Objetivo do teste

Verificar se o site acata o tempo de pomodoro e descanso selecionado pelo usuário.

### Passos

1 - Acessar o Navegador

2 - Informar o endereço do site

3 - Visualizar e clicar no botão em forma de "engrenagem" no canto superior direito

4 - Escolher o tempo de pomodoro e o tempo de descanso

5 - Confirmar a seleção

### Critérios de Êxito

Após confirmar a seleção do tempo do pomodoro e tempo de descanso, o timer do "tomate" mostrará o tempo escolhido. Ao final do tempo do pomodoro, o tempo de descanso será igual ao tempo selecionado anteriormente.

