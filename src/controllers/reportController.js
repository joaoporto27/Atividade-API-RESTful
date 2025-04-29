const { format } = require("@fast-csv/format");
const heroModel = require("../models/heroModel");

const exportHeroCSV = async (req, res) => {
    try {
        const heroes = await heroModel.getHeroes();

        res.setHeader("Content-Disposition", "attachment; filename=heroes.csv");
        res.setHeader("Content-Type", "text-csv");

        const csvStream = format({ headers: true });
        csvStream.pipe(res);

        heroes.forEach((hero) => {
            csvStream.write({
                Id: hero.id,
                Nome: hero.name,
                Photo: hero.photo
            });
        });

        csvStream.end();
    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar o CSV" });
    }
};

module.exports = { exportHeroCSV }