const pool = require("../config/database");

const getAllEditoras = async () => {
    const result = await pool.query(`SELECT publisher.*, heroes.name AS heroes_name 
        FROM publisher
        LEFT JOIN heroes ON publisher.hero_id = heroes.id`);
    return result.rows
};

const getEditoraById = async (id) => {
    const result = await pool.query(
        `SELECT publisher.*, heroes.name AS hero_name
       FROM publisher
       LEFT JOIN heroes ON publisher.hero_id = heroes.id
       WHERE publisher.id = $1`, [id]
    );
    return result.rows;
};

const createEditora = async (name, hero_id) => {
    const result = await pool.query(
        `INSERT INTO publisher (name, hero_id) VALUES ($1, $2) RETURNING *`,
        [name, hero_id]
    );
    return result.rows[0]
}

const updateEditora = async (id, name, hero_id) => {
    const result = await pool.query(
        `UPDATE publisher SET name = $1, hero_id = $2 WHERE id = $3 RETURNING *`,
        [name, hero_id, id]
    );
    return result.rows[0];
};

const deleteEditora = async (id) => {
    const result = await pool.query(`DELETE FROM publisher WHERE id = $1 RETURNING *`, [id])
    if (result.rowCount === 0) {
        return { error: "Editora não encontrado!" };
    }
    return { message: "Editora deletada com sucesso!" };
}

module.exports = { getAllEditoras, getEditoraById, createEditora, updateEditora, deleteEditora };