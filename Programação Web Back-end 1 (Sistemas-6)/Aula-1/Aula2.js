// Uma função que não tem nome, é uma função que usamos em apenas um lugar
const soma = function (a, b) {
    return a + b
}
console.log(soma(2, 3))




// Outra função, em vez de usarmos function, usamos => (Função de flecha, Arrow Function)
const sub = (a, b) => {
    return a - b
}
console.log(sub(5, 3))




// Função para ver se o numero é par
const ehPar = (n) => {
    return n % 2 === 0
}
// ou
const ehPar2 = (n) => n % 2 === 0




// funcao que retorna o quadrado
const quadrado = (n) => n ** 2




const teste = () => {
    const idade = 18
    if (idade >= 18) {
        var ehMaior = true // var pode ser usado em todo o escopo da function
        let t = true // let fica preso dentro do if, não consegue ser usado fora do if
    }
    console.log(ehMaior)
    //console.log(t) // quebra... t não foi definido
}
teste()




console.log("Arrays ================= ")

const notas = [10,6,4,8,5];
console.log(notas);

//Adicionar uma nova nota no array (insere na ultima posicao)
notas.push(50);
console.log(notas);

//Remover uma nova nota no array (remove sempre a ultima posição)
notas.pop();
console.log(notas);

//Adicionar uma nova nota no array (insere na primeira posicao)
notas.unshift(0)
console.log(notas);

//Remover uma nova nota no array (remove sempre a primeira posição)
notas.shift();
notas.shift();
notas.shift();
console.log(notas);


// Percorer array com for
for (let i = 0; i < notas.length; i++){
    console.log(notas[i]);
}
console.log("\n--------");
// outra forma:
for (let nota of notas) {
    console.log(nota)
}
console.log("\n--------");
// outra forma:
notas.forEach((nota) => {
    console.log(nota)
})
console.log("\n--------");
// outra forma: idx = id do index
notas.forEach((nota, idx) => {
    console.log(nota, idx)
})


const novasNotas = notas.map((nota) =>{
    return nota / 2
})

const map = (arr, func) => {
    const newArr = []
    for (let element of arr) {
        newArr.push(func(element))
    }
    return newArr
}

console.log(notas)
console.log(novasNotas)
console.log(map(notas, (nota) => nota / 2))




// Objetos

const aluno = {
    nome: "Hemerson",
    sobrenome: "Lacovic",
    age: 20,
    ce: 0.8,
    notas: [10, 8, 5, 7],
    getFullName: () => aluno.nome + " " + aluno.sobrenome
}

console.log(aluno.nome)
console.log(aluno.sobrenome)
console.log(aluno.getFullName())

console.log(aluno.notas
    .map(nota => nota * 2)
    .filter(nota => nota > 15)
    .map(nota => nota / 2)
    .reverse()
)

const objComplexo = {
    nome: "teste",
    obj: {
        array: [
            {
                teste: {
                    array: [2]
                }
            }
        ]
    }
}

console.log(objComplexo.obj.array[0].teste.array[0])

console.log(null)
console.log(undefined)