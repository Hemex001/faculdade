/*3. Escreva uma função chamada mapearArray que aceita uma função e um array como parâmetros. 
A função mapearArray deve aplicar a função recebida a cada elemento do array e retornar um novo array com os elementos resultantes.*/

function mapearArray(callback, array) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        resultado.push(callback(array[i]));
    }
    return resultado
}

function quadrado(num) {
    return num * num;
}

let array = [1, 2, 3, 4, 5];
let quadrados = mapearArray(quadrado, array);
console.log("Array ao quadrado: ");
console.log(quadrados);


function vezesDois(num) {
    return num * 2;
}

let array2 = [1, 2, 3, 4, 5];
let x2 = mapearArray(vezesDois, array);
console.log("Array vezes 2: ");
console.log(x2);