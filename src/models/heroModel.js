const pool = require('../config/database');

const getHeroes = async (name) => {
   if (!name) {
    const result = await pool.query("SELECT * FROM heroes");
    return result.rows
   } else {
    const result = await pool.query(
        "SELECT * FROM heroes WHERE name ILIKE $1",
        [`%${name}%`]);
    return result.rows;
   }
};

const getHero = async (id) => {
    const result = await pool.query("SELECT * FROM heroes WHERE id = $1", [id]);
    return result.rows[0];
};

const createHero = async (name, photo) => { 
    const result = await pool.query(
        "INSERT INTO heroes (name, photo) VALUES ($1, $2) RETURNING *",
        [name, photo]
    );
    return result.rows[0];
}

const updateHero = async (id, name, photo) => {
    const result = await pool.query(
        "UPDATE heroes SET name = $1, photo = $2 WHERE id = $3 RETURNING *",
        [name, photo, id]
    );
    return result.rows[0];
}

const deleteHero = async (id) => {
    const result = await pool.query("DELETE FROM heroes WHERE id = $1 RETURNING *", [id]);
    if (result.rowCount === 0) {
        return { error: "Herói não encontrado." };
    }
    return { message: "Herói deletado com sucesso." };
};


module.exports = {getHeroes, getHero, createHero, updateHero, deleteHero};