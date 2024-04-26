/*6. Escreva uma função chamada gerarLista que aceita um número inteiro positivo n e uma função de geração como parâmetros. 
A função de geração deve receber um índice e retornar o valor correspondente da lista. 
A função gerarLista deve criar uma lista de tamanho n, preenchendo cada elemento com o resultado da função de geração.*/

function gerarLista(n, funcaoGeracao) {
    let lista = new Array(n);

    for (let i = 0; i < n; i++) {
        lista[i] = funcaoGeracao(i);
    }

    return lista;
}

function quadradoDoIndice(indice) {
    return indice * indice;
}

function indiceVezesDois(indice) {
    return indice * 2;
}

let listaQuadrados = gerarLista(5, quadradoDoIndice);
let listaVezesDois = gerarLista(5, indiceVezesDois);

console.log("\nIndices do Array ao quadrado: ");
console.log(listaQuadrados);
console.log("\nIndices do Array vezes 2: ");
console.log(listaVezesDois);
