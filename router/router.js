import express from 'express'
import { 
    loginController,
    registerController,
    addSkaterController, 
    getSkatersController, 
    getSkaterController, 
    deleteSkaterController,
    editSkaterController,
    tokenController,
    adminController,
    updateStatusSkaterController    
} from '../controllers/controllers.js'

const router = express.Router()

router.get("/", getSkatersController)
router.get("/login", loginController)
router.get("/registro", registerController)

router.post("/skaters", addSkaterController)
router.post("/login", getSkaterController)
router.delete('/skaters/:id', deleteSkaterController)
router.put('/skaters', editSkaterController)

router.put("/skaters/status/:id", updateStatusSkaterController)

router.get("/admin", adminController)
router.get("/Perfil", tokenController)

export default router