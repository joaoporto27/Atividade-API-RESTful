require("dotenv").config();
const express = require("express");
const cors = require("cors");
const heroesRoutes = require("./src/routes/heroRoutes");
const editorasRoutes = require("./src/routes/editorasRoutes");
const reportRoutes = require('./src/routes/reportRoutes')
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/report/csv", reportRoutes);
app.use("/api/heroes", heroesRoutes);
app.use("/api/editoras", editorasRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});