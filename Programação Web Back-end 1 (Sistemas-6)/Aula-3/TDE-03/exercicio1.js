/*1. Escreva uma função chamada encontrarMaiorElemento que aceita um array de números como parâmetro e retorna o maior elemento do array.*/

function encontrarMaiorElemento(array) {
    if (array.length === 0) {
        return undefined;
    }
    let maior = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }
    return maior;
}

let array = [50, 30, 5, 3, 80, 110, -2];

console.log(encontrarMaiorElemento(array));