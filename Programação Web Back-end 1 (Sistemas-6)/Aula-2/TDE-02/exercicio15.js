/*15. Faça um programa que converta uma temperatura de Celsius para Fahrenheit.*/

function converter(c) {
    return (c * 1.8) + 32;
}

console.log(converter(37).toFixed(1)); // 37 graus Celsius = 98.6 Fahrenheit - o .toFixed(1) serve para exibir só 1 casa decimal
