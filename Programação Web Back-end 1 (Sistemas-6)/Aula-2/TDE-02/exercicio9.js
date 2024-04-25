/*9. Escreva uma função que receba um número como parâmetro e retorne verdadeiro se for par e falso caso contrário.*/

function parOuImpar (n) {
    if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(parOuImpar(2));
console.log(parOuImpar(5));
