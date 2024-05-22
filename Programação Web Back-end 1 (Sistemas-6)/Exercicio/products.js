const express = require("express")

const router = express.Router();


let products = [
    {id: 1, name: "ps5", price: 5000},
    {id: 2, name: "xbox", price: 3000},
    {id: 3, name: "switch", price: 2299.99}
]

const withAuth = (req, res, next) => {
    const auth = req.headers.authorization;
    if (auth === "token valido") return next();
    res.status(401).send();
}

// quando alguem fizer uma requisição get:
router.get("/", (req, res) => {
    res.send("Olá")
})

router.get("/products", (req, res) => {
    res.json({
        products: products
    })
})

router.post("/products", withAuth, (req, res) => {
    const product = req.body; //armazena o que foi enviado no post (body) na product
    product.id = products.length + 1;
    products.push(product);
    res.json({ status: "ok" })
})

router.put("/products/:id", (req, res) => {
    const id = Number(req.params.id);
    products.find(product => {
        return (product.id === id)
    })
    product.name = req.body.name,
    product.price = req.body.price
    res.json({ status: "ok" })
})

router.delete("/products/:id", (req, res) => {
    const id = Number(req.params.id);
    products = products.filter((product) => {
        return product.id !== id;
    });
    res.json({ status: "ok" });
});

module.exports = router;
