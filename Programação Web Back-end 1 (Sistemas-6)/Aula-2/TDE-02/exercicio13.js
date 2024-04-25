/*13. Faça um programa que verifique se um número é negativo, positivo ou zero.*/


function positivoNegativo(n) {
    if (n < 0) {
        return "negativo";
    } else if (n === 0) {
        return "é 0";
    } else {
        return "positivo";
    }
}

console.log(positivoNegativo(-2));
console.log(positivoNegativo(0));
console.log(positivoNegativo(2));
