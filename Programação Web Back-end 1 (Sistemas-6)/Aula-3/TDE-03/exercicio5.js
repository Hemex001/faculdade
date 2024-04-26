/*5. Escreva uma função chamada validarDados que aceita uma função de validação e um objeto como parâmetros. 
A função deve usar a função de validação para verificar se os dados no objeto atendem à condição especificada e retornar true se sim, ou false caso contrário. 
(Ex. nome possui mais de 3 caracteres, senha existe, etc)*/

function validarDados(validacao, objeto) {
    return validacao(objeto);
}

function validarUsuario(usuario){
    return usuario.nome.length > 3 && usuario.hasOwnProperty('senha');
}

let usuario1 = {
    nome: "Hemerson",
    senha: "123456"
}

let usuario2 = {
    nome: "Hemerson"
}

let usuario3 = {
    nome: "ABC",
    senha: "123456"
}

let resultado1 = validarDados(validarUsuario, usuario1); // retorna true pq tem senha
let resultado2 = validarDados(validarUsuario, usuario2); // retorna false pq nao tem senha
let resultado3 = validarDados(validarUsuario, usuario3); // retorna false pq o usuario nao tem mais de 3 caracteres

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);