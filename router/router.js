import express from 'express'
import { 
    addSkaterController, 
    getSkatersController, 
    getSkaterController, 
    deleteSkaterController,
    editSkaterController,
    tokenController
} from '../controllers/controllers.js'

const router = express.Router()

//página principal, muestra a participantes registrados
router.get("/", getSkatersController)

router.delete('/skaters/:id', deleteSkaterController);
router.post("/login", getSkaterController)
router.post("/skaters", addSkaterController)
router.put('/skaters', editSkaterController)

router.get("/Perfil", tokenController);

export default router