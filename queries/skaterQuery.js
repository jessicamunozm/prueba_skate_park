import pool from "../config/db.js";

const addSkaterQuery = async(skater) => {
    const values = Object.values(skater)
    const consulta = {
        text: `INSERT INTO skaters (email, nombre, password, anos_experiencia, especialidad, foto, estado) VALUES ($1, $2, $3, $4, $5, $6, 'f') returning *`,
        values: values,
    }
    const result = await pool.query(consulta)
    console.log(result.rows[0])
    return result.rows[0]
}

const getSkaterQuery = async() => {
const getSkaterQuery = {
    text: 'SELECT * FROM skaters',
}
const result = await pool.query(getSkaterQuery)
console.log(result.rows)
return result.rows
}

export  {addSkaterQuery, getSkaterQuery}