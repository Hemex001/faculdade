/*11. Faça um programa que calcule a soma dos números pares de 1 a 100.*/

function somaNumPar() {
    let soma = 0;
    for (let i = 2; i <= 100; i = i + 2) {
        soma = soma + i;
    }
    return soma;
}

console.log(somaNumPar());