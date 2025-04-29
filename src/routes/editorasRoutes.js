const express = require("express");
const router = express.Router();
const editoraController = require("../controllers/editoraController.js");
const apiKeyMiddleware = require("../config/apiKey");
const upload = require("../config/upload.js");

router.use(apiKeyMiddleware);

router.get("/", editoraController.getAllEditoras);
router.get("/:id", editoraController.getEditoraById);
router.post("/", editoraController.createEditora);
router.put("/:id", editoraController.updateEditora);
router.delete("/:id", editoraController.deleteEditora);

module.exports = router;