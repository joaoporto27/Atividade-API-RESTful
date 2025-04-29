const express = require("express");
const router = express.Router();
const heroController = require("../controllers/heroiController");
const apiKeyMiddleware = require("../config/apiKey")

router.use(apiKeyMiddleware);

router.get("/", heroController.getAllHeroes);
router.get("/:id", heroController.getHero);
router.post("/", heroController.createHero);
router.put("/:id", heroController.updateHero)

module.exports = router;