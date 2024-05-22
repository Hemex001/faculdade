/* Configurando/Inicializando um servidor com express */
// http://localhost:8080/
const express = require("express")
const { router: movieRouter } = require("./routes/movies")
const { router: userRouter } = require("./routes/user")
const server = express()

server.use(express.json())
server.use((req, res, next) => {
    console.log(req.url)
    console.log(req.method)
    console.log(req.body)
    next()
})

server.get("/health", (req, res) => {
    res.json({
        status: "Running"
    })
})

server.use("/api", movieRouter) 
server.use("/api", userRouter) 

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
