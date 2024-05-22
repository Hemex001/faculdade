const express = require("express")
const { findMovies, findMoviesById, createMovie, updateMovie, deleteMovie } = require("../db/movies")
const { auth } = require("../middlewares/auth")
const router = express.Router() // criando um novo roteador dentro do projeto

//http://localhost:8080/api/movies?rate=10
//http://localhost:8080/api/movies

// selecionar todos
router.get("/movies", auth, async (req, res) => {
    const movies = await findMovies(req.query.rate)
    res.json(movies)
})

//selecionar especificp
router.get("/movie/:id", auth, async (req, res) => {
    const id = Number(req.params.id)
    const movie = await findMoviesById(id)
    if (!movie) return res
        .status(404).json({message: `Movie with id ${id} not found.`})
    res.json(movie)
})

// criar
router.post("/movie", auth, async (req, res) => {
    const data = req.body
    const movie = await createMovie(data)
    res.status(201).json(movie)
})

// atualizar
router.put("/movie/:id", auth, async (req, res) => {
    const id = Number(req.params.id)
    const movie = await updateMovie(id, req.body)
    res.json(movies)
})

// deletar
router.delete("/movie/:id", auth, async (req, res) => {
    const id = Number(req.params.id)
    await deleteMovie(id)
    res.status(204).send()
})

module.exports = { 
    router
}