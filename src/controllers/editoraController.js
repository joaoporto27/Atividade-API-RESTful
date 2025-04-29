const editoraModel = require('../models/editoraModel');

const getAllEditoras = async (req, res) => {
    try {
        const editoras = await editoraModel.getAllEditoras();
        res.json(editoras)
    } catch (error) {
        console.error('Erro ao buscar editoras:', error);
        res.status(500).json({ error: 'Erro ao buscar editoras.' });
    };
};

const getEditoraById = async (req, res) => {
    try {
      const editora = await editoraModel.getEditoraById(req.params.id);
      if (!editora) {
        return res.status(404).json({ error: 'Editora não encontrado.' });
      };
      res.json(editora);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar editora.' });
    }
  };

const createEditora = async (req, res) => {
    try {
      const { name, hero_id } = req.body;
      const newEditora = await editoraModel.createEditora(name, hero_id);
      res.status(201).json(newEditora);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar editora.' });
    }
  }

const updateEditora = async (req, res) => {
    try {
        const { name, hero_id } = req.body;
        const updatedEditora = await editoraModel.updateEditora(req.params.id, name, hero_id);
        if (!updatedEditora) {
            return res.status(404).json({ message: "Editora não encontrado." });
        }
        res.json(updatedEditora);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar Editora." });
    }
};

const deleteEditora = async (req, res) => {
    try {
        const message = await editoraModel.deleteEditora(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar editora." });
    }
};


module.exports = { getAllEditoras, getEditoraById, createEditora, updateEditora, deleteEditora };