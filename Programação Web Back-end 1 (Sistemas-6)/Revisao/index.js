const express = require('express');
const { router: userRouter } = require('./routes/user'); // importa o router
const { router: gameRouter } = require('./routes/games'); // importa o router

const server = express();
server.use(express.json()); // faz com que o server receba json

server.get('/', (req, res) => {
    res.json({
        status: "Running"
    })
})


server.use(userRouter); // usa o router
server.use(gameRouter); // usa o router

const port = 8080;
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})