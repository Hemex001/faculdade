/*
const soma = (n1, n2, successCb, errorCb) => {
    const result = n1 + n2;
    if (result % 2 === 0) {
        return successCb(result)
    } else {
        errorCb(result)
    }
}

const ehPar = (n) => {
    console.log(`O número ${n} é Par!`)
}

const ehImpar = (n) => {
    console.log(`O número ${n} é Ímpar!`)
}

soma(1, 3, ehPar, ehImpar)



console.log(`\nUsando Promise: ------------- `)
/* Usando Promise 
const somaPromise = (n1, n2) => {
    return new Promise((successCb, errorCb) => {
    const result = n1 + n2;
    if (result % 2 === 0) {
        return successCb(result)
    } else {
        errorCb(result)
    }
})
}

somaPromise(1, 4).then(ehPar).catch(ehImpar)
somaPromise(1, 1).then(ehPar).catch(ehImpar)
*/


/**** node */

// Importar algo no node
const path = require("path")

const imgSrc = path.join("./images", "/group1/teste.png")
console.log(imgSrc);

console.log(path.join(__dirname, "teste.png"))

// usando só a função join do pacote path
const { join } = require("path");

const imgSrc2 = join("./images", "/group1/teste.png")
console.log("\n" + imgSrc2);


const pessoa = {
    nome: "Hemerson"
}

const nome = "teste"
// vai no objeto pessoa, pega o nome e joga em uma nova variavel nomePessoa
const { nome: nomePessoa } = pessoa

console.log(nomePessoa)


const arr = [1,2,3]
const [e1, e2, e3] = arr
console.log(e1, e2, e3)


// importando util
const util = require("./util")

console.log(util.duplicarNumero(10))

// npm init