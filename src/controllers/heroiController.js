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

const createHero = async (req,res) => {
    try {
        const { name } = req.body;
        const photo = req.file ? req.file.filename : null;
        const newHero = await heroModel.createHero(name, photo);
        res.status(201).json(newHero);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar herói." });
    }
};

const updateHero = async (req, res) => {
    try {
        const { name } = req.body;
        const photo = req.file ? req.file.filename : null;
        const updatedHero = await heroModel.updateHero(req.params.id, name, photo);
        if (!updatedHero) {
            return res.status(404).json({ message: "Herói não encontrado." });
        }
        res.json(updatedHero);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar herói." });
    }
};

module.exports = {getAllHeroes, getHero, createHero, updateHero};