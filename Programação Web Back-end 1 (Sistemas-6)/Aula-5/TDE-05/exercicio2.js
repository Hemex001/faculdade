import { faker } from '@faker-js/faker';

function formatarData(data) {
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0'); // getMonth() retorna mês de 0 a 11
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
}

function gerarPessoaFalsa() {
    const nome = faker.person.fullName();
    const email = faker.internet.email();
    const dataNascimentoRaw = faker.date.birthdate({ min: 18, max: 65, mode: 'age' }); 
    const dataNascimento = formatarData(dataNascimentoRaw);

    return {
        nome,
        email,
        dataNascimento
    };
}

// Exemplo de uso da função
console.log(gerarPessoaFalsa());
