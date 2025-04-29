const express = require("express");
const router = express.Router();
const heroController = require("../controllers/heroiController");
const apiKeyMiddleware = require("../config/apiKey")

router.use(apiKeyMiddleware)

router.get("/", heroController.getAllHeroes);

module.exports = router;