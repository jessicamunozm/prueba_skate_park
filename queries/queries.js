import pool from "../config/db.js"

const addSkaterQuery = async (skater) => {
  try {
    const values = Object.values(skater)
    const consulta = {
      text: `insert into skaters (email, nombre, password, anos_experiencia, especialidad, foto, estado) values($1,$2,$3,$4,$5,$6,'f') returning * `,
      values: values
    }
    const result = await pool.query(consulta)
    console.log(result.rows[0])
    return result.rows[0]
  } catch (error) {console.log(error)}}

const getSkatersQuery = async () => {
  try {
    const consulta = {
    text: `select * from skaters`,
    }
  const result = await pool.query(consulta)
    return result.rows
  } catch (error) {console.log(error)}}

const getSkaterQuery = async (email, password) => {
  const consulta = {
    text: `select * from skaters where email = $1 and password = $2`,
    values: [email, password]
  }
  try {
  const result = await pool.query(consulta)
  return result.rows[0]
  } catch (error) {console.log(error)}}

const deleteSkaterQuery = async (id) => {
  const consulta = {
    text: 'delete from skaters where id=$1 returning *',
    values:[id]
  }
  const result = pool.query(consulta)
  return result.rows[0]}

  const editSkaterQuery = async (skater, email) =>{
    skater = Object.values(skater)
    skater.push(email)
    const consulta = {
      text:`update skaters set nombre = $1, password = $2, anos_experiencia = $3, especialidad = $4 where email = $5 returning *`,
      values: skater
    }
    try {
      console.log(consulta)
      const result = await pool.query(consulta)
      console.log(result.rows[0])
      return result.rows[0]
    } catch (error) {console.log(error)}}


export {addSkaterQuery, getSkatersQuery, getSkaterQuery, deleteSkaterQuery, editSkaterQuery}