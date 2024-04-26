/*2. Escreva uma função chamada somaElementosPares que aceita um array de números como parâmetro e retorna a soma de todos os elementos pares do array.*/

function somaElementosPares(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            soma = soma + array[i];
        }
    }
    return soma;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(somaElementosPares(array));