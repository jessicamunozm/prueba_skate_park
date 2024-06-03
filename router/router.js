import express from "express";

import {homeController, loginController, registroController, addSkaterController, getSkaterController, skaterLoginController} from "../controllers/controllers.js"

const router = express.Router();

router.get('/', getSkaterController)
router.get('/registro', registroController)
router.post('/skaters', addSkaterController)
router.get('/login', skaterLoginController)
//router.get('/skaters', getSkaterController)


export default router