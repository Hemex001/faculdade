const express = require("express");
const router = express.Router();
const zod = require("zod");
const { findProducts, saveProduct } = require("../db/product.js");
const { auth } = require("../middlewares/auth");


const productSchema = zod.object({
    name: zod.string().min(3).max(150),
    price: zod.number(),
});

router.get("/pecas", auth, async (req, res) => {
    const product = await findProducts(req.user);
    res.json({ product });
})

router.post("/peca", auth, async (req, res) => {
    try {
        console.log(req.user);
        const { name, price } = productSchema.parse(req.body);
        const product = await saveProduct(name, price, req.user);
        delete product.userId;
        res.status(201);
        res.json({ product });
    } catch (error) {
        if (error instanceof zod.ZodError) return res.status(400).json(error);
        console.log(error);
        res.status(500).json({message: "Internal server error"});
    }
})

module.exports = { 
    router,
};