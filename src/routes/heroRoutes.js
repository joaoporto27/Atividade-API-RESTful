const express = require("express");
const router = express.Router();
const heroController = require("../controllers/heroiController");
const apiKeyMiddleware = require("../config/apiKey");
const upload = require("../config/upload.js");

router.use(apiKeyMiddleware);

router.get("/", heroController.getAllHeroes);
router.get("/:id", heroController.getHero);
router.post("/", upload.single("photo"), heroController.createHero);
router.put("/:id", upload.single("photo"), heroController.updateHero);
router.delete("/:id", heroController.deleteHero);

module.exports = router;