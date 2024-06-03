import express from 'express'
import { 
    // homeController,
    loginController,
    // profileController,
    registerController,
    addSkaterController, 
    getSkatersController, 
    getSkaterController, 
    deleteSkaterController,
    editSkaterController,
    tokenController,
    adminController,
    updateSkaterController
} from '../controllers/controllers.js'

const router = express.Router()

//página principal, muestra a participantes registrados
router.get("/", getSkatersController)

router.delete('/skaters/:id', deleteSkaterController)
router.post("/login", getSkaterController)
router.post("/skaters", addSkaterController)
router.put('/skaters', editSkaterController)
router.put("/skaters/status/:id", updateSkaterController)
router.get("/admin", adminController)

router.get("/Perfil", tokenController)
router.get("/login", loginController)
router.get("/registro", registerController)

export default router