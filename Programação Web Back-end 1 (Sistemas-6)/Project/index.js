/* Configurando/Inicializando um servidor com express */
const express = require("express")
const server = express()
// http://localhost:8080/

server.get("/", (req, res) => {
    res.send("Hello World")
})

server.get("/user/:id", (req, res) => {
    res.json({
        id: req.params.id,
        name: "Hemerson",
        email: "hemersonlacovic@hotmail.com",
    })
})


server.get("/user", (req, res) => {
    res.json({
        name: "Hemerson",
        email: "hemersonlacovic@hotmail.com",
    })
})

const port = 8080
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})





//console.log("Hello World")