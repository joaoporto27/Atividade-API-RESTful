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

module.exports = {getHeroes, getHero};