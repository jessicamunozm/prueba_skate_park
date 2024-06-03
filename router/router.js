import express from 'express'
import { addSkaterController, getSkatersController } from '../controllers/controllers.js'

const router = express.Router()

router.get("/", getSkatersController)
router.post("/skaters", addSkaterController)

export default router