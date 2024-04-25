/*14. Escreva uma função que receba dois números como parâmetros e retorne verdadeiro se a soma deles for divisível por 5 e falso caso contrário.*/

function divisivelPorCinco(num1, num2) {
    return (num1 + num2) % 5 === 0;
}


console.log(divisivelPorCinco(7, 3));   //true, pq 10 é divisível por 5
console.log(divisivelPorCinco(3, 4));   //false, pq 7 não é divisível por 5
