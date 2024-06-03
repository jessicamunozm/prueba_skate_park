import pg from 'pg'
const { Pool } = pg
import 'dotenv/config'
import { allowedNodeEnvironmentFlags } from 'process'

const { HOST, USER, PASSWORD, DATABASE } = process.env

const config = { host: HOST, user: USER, password: PASSWORD, database: DATABASE, allowExitOnIdle: true }

const pool = new Pool(config) 

export default pool