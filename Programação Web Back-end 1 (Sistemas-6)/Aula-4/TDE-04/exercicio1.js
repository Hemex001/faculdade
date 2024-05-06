//função
function soma(num1, num2, callbackSucesso, callBackErro) {
    const resultado = num1 + num2;
    if (resultado % 2 === 0) {
        return callbackSucesso(resultado);
    } else {
        return callBackErro(resultado);
    }
}

//callbacks
function callbackSucesso (resultado) {
    console.log("a operação foi concluída com sucesso e o número somado é par: " + resultado + "\n");
}

function callBackError(resultado) {
    console.log("a operação falhou, o número é ímpar: " + resultado + "\n");
}

soma(3, 3, callbackSucesso, callBackError)