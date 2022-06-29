var botaoAtualizar = document.getElementById('atualizar-saldo');
var botaoLimpar = document.getElementById('limpar-saldo');
var soma = document.getElementById('soma');
var campoSaldo = document.getElementById('campo-saldo');
campoSaldo.innerHTML = 0;
function somarAoSaldo(soma) {
    campoSaldo.innerHTML = Number(campoSaldo.innerHTML) + soma;
}
function limparSaldo() {
    console.log('saldo limpo');
    campoSaldo.innerHTML = '';
}
if (botaoAtualizar)
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(Number(soma.value));
    });
if (botaoLimpar)
    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    });
