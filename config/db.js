import pg from 'pg'
const { Pool } = pg
process.loadEnvFile()

const { HOST, USER, PASSWORD, DATABASE } = process.env

const config = { 
    host: HOST, 
    user: USER, 
    password: PASSWORD, 
    database: DATABASE, 
    allowExitOnIdle: true }

const pool = new Pool(config) 

export default pool