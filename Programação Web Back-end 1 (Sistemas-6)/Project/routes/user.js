const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const router = express.Router()
const { prisma } = require("../db/prisma")
const { findUserByEmail } = require("../db/users")

router.post("/register", async (req, res) => {
    const userAlreadyExists = await findUserByEmail(req.body.email)
    if (userAlreadyExists) return res.status(400).json({
        message: "User (email) already exists"
    })
    const hash = bcrypt.hashSync(req.body.password, 10)
    const user = await prisma.users.create({
        data: {
            email : req.body.email,
            password: hash
        }
    })
    delete user.password // deleta a senha do usuario antes de ser enviada para o retorno (LGPD -- IMPORTANTE PARA A PROVA)
    res.send(user)
})

router.post("/login", async (req, res) => {
    const user = await findUserByEmail(req.body.email)
    if (!user) return res.status(401)
        .json({message: "Invalid credentials"})

    const isPasswordTheSame = bcrypt
        .compareSync(req.body.password, user.password)

    if (!isPasswordTheSame) return res.status(401)
        .json({message: "Invalid credentials"})

    const token = jwt.sign ({ id: user.id, email: user.email }, process.env.SECRET, {
        expiresIn: "10h"
    });

    res.json({ 
       success: true,
       token
    })
})




module.exports = { router }