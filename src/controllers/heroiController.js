const heroModel = require('../models/heroModel');

const getAllHeroes = async (req, res) => {
    try {
        const heroes = await heroModel.getHeroes();
        res.status(200).json(heroes);
    } catch (error) {  
        res.status(404).json({message: "Erro ao buscar heróis"});   
    }
};

const getHero = async (req,res) => {
    try {
        const hero = await heroModel.getHero(req.params.id);
        res.status(200).json(hero);
    } catch (error) {
        res.status(404).json({message: "Erro ao buscar heróis"});
    }
};

module.exports = {getAllHeroes, getHero};