const express = require("express");
const productRouter = require("./products");
const server = express();

server.use(express.json()); // falando pro servidor express que vamos passar as informaçÕes em json
server.use((req, res, next) => {
    console.log("time: " + new Date().toISOString())
    next()
})

// middleware
server.use(productRouter);
// middleware
server.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send();
})




module.exports = server;
// http://localhost:8080/