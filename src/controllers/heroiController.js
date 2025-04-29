const heroModel = require('../models/heroModel');

const getAllHeroes = async (req, res) => {
    try {
        const heroes = await heroModel.getHeroes();
        res.status(200).json(heroes);
    } catch (error) {  
        res.status(404).json({message: "Erro ao buscar usuários"});   
    }
};

module.exports = {getAllHeroes};