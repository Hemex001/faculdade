const express = require('express');
const server = express();
const tasksRouter = require('./tasksRouter');

server.use(express.json());
server.use('/tasks', tasksRouter);

const port = 8080
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})