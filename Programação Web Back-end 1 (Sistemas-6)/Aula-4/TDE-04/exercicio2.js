function somaComPromise(num1, num2) {
    return new Promise((resolve, reject) => {
        const resultado = num1 + num2;
        if (resultado % 2 === 0) {
            resolve(resultado);
        } else {
            reject(resultado);
        }
    });
}

somaComPromise(3,3)
    .then(resultado => console.log("Sucesso: o número " + resultado + " é par."))
    .catch(resultado => console.log("Erro: o número " + resultado + " é ímpar."));
