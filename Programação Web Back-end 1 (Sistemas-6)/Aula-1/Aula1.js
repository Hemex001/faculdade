/*
https://github.com/igornfaustino/aula-backend-2024
*/

//executar no terminal: node teste.js
console.log("Hello World");
console.log("Hello World", 123, "Teste");

// Declaração de variáveis
let teste = 10;
var nome = "Hemerson" // não usamos
const ehPar = true //constante, nao pode ser alterada

teste = 12;

// Printando as variáveis declaradas anteriormente
console.log(teste);
console.log(nome);
console.log(ehPar);

console.log(2 + 2)
console.log(3 * 2)
console.log(10 / 2)
console.log(8 - 3)
console.log(3 % 2) // resto da divisao
console.log(5 / 2) // resulta numero quebrado
console.log(8 ** 3) // potencia - 8 elevado a 3
console.log(parseInt(5 / 2)) // pega apenas o inteiro do numero quebrado

console.log("\nTabela verdade do && (E)")
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

console.log("\nTabela verdade do || (OU)")
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

console.log("\nComparações")
console.log(1 == 1)
console.log(1 == '1')
console.log(2 * '2')
console.log(1 != 1)
console.log(1 !== '2')
console.log(1 === '1')
console.log(1 === 1) // sempre usamos tres iguais ===
console.log(1 !== '1')


let idade = 18
if (idade > 18){
    console.log("Maior de Idade")
} else if (idade === 18) {
    console.log("Igual a 18")
} else {
    console.log("Menor de Idade")
}


//NPM = Node Package Manager

const code = 1
//switch case
switch(code){
    case 1:
        console.log("Ligar TV")
        break
    case 2:
        console.log("Desligar TV")
        break
    defult:
        console.log("Sei lá")
}

// Laço FOR
for(let i = 0; i < 10; i++) {
    console.log(i+1)
}

// Laço WHILE
let i = 10;
while (i < 30) {
    console.log(i)
    i *= 2 //i = i * 2
}

// Função
function soma(a,b) {
    return a + b;
}

// Função - Se eu passar só o valor do A e não passar o B, ele assume que o B tem valor padrão = 1
function soma2(a,b = 1) {
    return a + b;
}

const resultado = soma(2,3)
console.log(resultado)

// Função 
function calc(a, b, op) {
    if (op === '+')
        return a + b;
    if (op === '-')
        return a - b;
}

const result = calc(2,3, '-')
console.log(result)



