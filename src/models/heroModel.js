const pool = require('../config/database');

const getHeroes = async (hero) => {
   if (!hero) {
    const result = await pool.query("SELECT * FROM heroes");
    return result.rows
   } else {
    const result = await pool.query(
        "SELECT * FROM heroes WHERE hero ILIKE $1",
        [`%${hero}%`]
    );
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


module.exports = {getHeroes, getHero, createHero, updateHero};