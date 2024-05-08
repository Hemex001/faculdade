/* Configurando/Inicializando um servidor com express */
const express = require("express")
const { router } = require("./routes/movies")
const server = express()
server.use(express.json())
// http://localhost:8080/



server.get("/health", (req, res) => {
    res.json({
        status: "Running"
    })
})

server.use("/api", router) 

const port = 8080
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})







/*
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

// Aula 08/05
npm install prisma --save-dev
npx prisma init --datasource-provider sqlite
npx prisma migrate dev --name "create movies table"
npm install prisma --save-dev 
npx prisma studio  // Abre a interface do banco de dados no navegador
*/
