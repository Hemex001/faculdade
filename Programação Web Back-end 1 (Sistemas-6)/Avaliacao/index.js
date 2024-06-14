const express = require('express');
const { router: userRouter } = require('./routes/user');
const { router: productRouter } = require('./routes/product');

const server = express();
server.use(express.json());

server.use(userRouter);
server.use(productRouter);

const port = 8080;
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})