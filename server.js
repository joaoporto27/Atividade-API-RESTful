require("dotenv").config();
const express = require("express");
const cors = require("cors");
const heroesRoutes = require("./src/routes/heroRoutes");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

//setupSwagger(app); // Ativa o Swagger
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/heroes", heroesRoutes);
//app.use("/api/posts", postRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});