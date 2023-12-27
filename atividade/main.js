const form = document.getElementById('number-form')
const numberA = document.getElementById('numero-a');
const numberB = document.getElementById('numero-b');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const resposta = document.getElementById('message-resposta');
    const mensagemDeSucesso =  `O numero do campo B: ${numberB.value} é maior que o numero do campo A: ${numberA.value}`;
    const mensagemDeErro =  `O numero do campo A: ${numberA.value} é maior que o numero do campo B: ${numberB.value}`;
    const mensagemIgual = `O numero do campo A: ${numberA.value} é igual ao numero do campo  B: ${numberB.value}`;

    if(numberA.value < numberB.value){
        resposta.innerHTML = mensagemDeSucesso;
        resposta.style.display = 'block';

        numberA.value = '';
        numberB.value = '';

    }else if(numberA.value == numberB.value){
        resposta.innerHTML = mensagemIgual;
        resposta.style.display = 'block';
        numberA.value = '';
        numberB.value = '';
    }else {
        resposta.innerHTML = mensagemDeErro;
        resposta.style.display = 'block';
        numberA.value = '';
        numberB.value = '';
    }
})