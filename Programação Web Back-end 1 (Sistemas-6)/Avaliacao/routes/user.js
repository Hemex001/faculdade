const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { findByEmail, register } = require("../db/user");

const userRegisterSchema = zod.object({
    name: zod.string().min(3).max(150),
    email: zod.string().email(),
    password: zod.string().min(6),
});

const userLoginSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6),
});

router.post("/register", async (req, res) => {
    try {
        const {name, email, password} = userRegisterSchema.parse(req.body);

        const user = await findByEmail(email);
        if (user) return res.status(400).json({message: "User already registered"})
        
        const hash = bcrypt.hashSync(password, 10);
        const savedUser = await register(name, email, hash);
        delete savedUser.password;
        res.status(201);
        res.json(savedUser);    
    } catch (error) {
        console.log(error);
        if (error instanceof zod.ZodError) return res.status(400).json(error);
        res.status(500).json({message: "Internal server error"});
    }
});

router.post("/login", async (req, res) => {
    try {
        const {email, password} = userLoginSchema.parse(req.body);

        const user = await findByEmail(email);
        if (!user) return res.status(401).json({message: "Invalid Credentials"})

        const isPasswordTheSame = bcrypt.compareSync(password, user.password);
        if (!isPasswordTheSame) return res.status(401).json({message: "Invalid Credentials"})

        const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
        res.json({
            token,
        });
    } catch (error) {
        console.log(error);
        if (error instanceof zod.ZodError) return res.status(400).json(error);
        res.status(500).json({message: "Internal server error"});
    }
})





module.exports = { 
    router,
};