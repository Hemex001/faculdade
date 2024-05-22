const express = require("express");
const router = express.Router();
const zod = require("zod");
const { findGames, saveGame } = require("../db/game");
const { auth } = require("../middlewares/auth");


const gameSchema = zod.object({
    name: zod.string(),
    platform: zod.string(),
    description: zod.string().optional(),
});

router.get("/games", auth, async (req, res) => {
    const games = await findGames(req.user);

    res.json({ games });
})

router.post("/game", auth, async (req, res) => {
    try {
        console.log(req.user);
        const { name, description, platform } = gameSchema.parse(req.body);
        const game = await saveGame(name, description, platform,);
        res.json({ game });
    } catch (error) {
        if (error instanceof zod.ZodError) return res.status(400).json(error);
        console.log(error);
        res.status(500).json({message: "Internal server error"});
    }
})

module.exports = { 
    router,
};