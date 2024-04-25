/*12. Escreva uma função que receba dois números como parâmetros e retorne verdadeiro se o primeiro for múltiplo do segundo e falso caso contrário.*/

function ehMultiplo(num1, num2) {
    return num2 !== 0 && num1 % num2 === 0; 
}

console.log(ehMultiplo(10, 2)); // true, pq 10 é múltiplo de 2
console.log(ehMultiplo(10, 3)); // false, pq 10 não é múltiplo de 3
console.log(ehMultiplo(15, 5)); // true, pq 15 é múltiplo de 5
