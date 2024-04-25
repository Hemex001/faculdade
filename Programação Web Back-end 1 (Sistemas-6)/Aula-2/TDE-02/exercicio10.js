/*10. Crie uma função que receba um número como parâmetro e retorne o fatorial desse número.*/

function fatorial(n) {
    let resultado = 1;
    for (let i = 2; i <= n; i++){
        resultado = resultado * i;
    }
    return resultado;
}

console.log(fatorial(4));