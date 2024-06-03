import express from "express";

import homeController from "../controllers/homeController.js"
import registroController from "../controllers/registroController.js"
import {addSkaterController, getSkaterController} from "../controllers/skatersController.js"
import loginController from "../controllers/loginController.js"

const router = express.Router();

router.get('/', getSkaterController)
router.get('/registro', registroController)
router.post('/skaters', addSkaterController)
router.get('/login', loginController)
//router.get('/skaters', getSkaterController)


export default router