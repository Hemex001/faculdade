const math = require("./mycustommodule") // importa o modulo mycustommodule
const colors = require("colors") // importa o modulo colors
const server = require("./server")


const port = 8080;
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});



console.log(math.soma(1,2)) // usando o modulo math que criamos (mycustommodule.js)
console.log(colors.green("Sucesso!!!")) // usando o modulo colors que baixamos
console.log(colors.red("Falha!!!")) // usando o modulo colors que baixamos