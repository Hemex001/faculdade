/*4. Escreva uma função chamada filtrarArray que aceita uma função de filtro e um array como parâmetros. 
A função de filtro deve retornar true caso o elemento deva permanecer no array e false caso contrario. 
A função filtrarArray deve aplicar essa função a todos os elementos e retornar um novo array apenas com os elementos restantes*/

function filtrarArray(filtro, array) {
    let resultado = [];

    for (let i = 0; i < array.length; i++) {
        if (filtro(array[i])) {
            resultado.push(array[i]);
        }
    }

    return resultado;
}

const ehPar = (num) => num % 2 === 0;
const ehImpar = (num) => num % 2 !== 0;

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosPares = filtrarArray(ehPar, array);
let numerosImpares = filtrarArray(ehImpar, array);

console.log("Numeros pares do array: ");
console.log(numerosPares);

console.log("Numeros pares do array: ");
console.log(numerosImpares);
