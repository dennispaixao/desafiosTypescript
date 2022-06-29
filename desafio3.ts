let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo:any = document.getElementById('campo-saldo');

    campoSaldo.innerHTML = 0

function somarAoSaldo(soma:number):void {
    campoSaldo.innerHTML = Number(campoSaldo.innerHTML)+ soma;
}

function limparSaldo():void {
    console.log('saldo limpo');
    campoSaldo.innerHTML = '';
}
if(botaoAtualizar)
botaoAtualizar.addEventListener('click', function () {

    somarAoSaldo(Number(soma.value));
});
if(botaoLimpar)
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});