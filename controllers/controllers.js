import path from 'path'
import { addSkaterQuery, getSkaterQuery, tokenSkaterQuery} from '../queries/skaterQuery.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const __dirname = path.resolve()

const homeController = async(req, res) => {
    res.render('home')
}

const loginController = async (req, res) => {
    res.render('Login')
}

const registroController = async (req, res) => {
    res.render('Registro')
}

const addSkaterController = async (req, res) => {
    const {email, nombre, password, anos_experiencia, especialidad} = req.body
    const skater = {email, nombre, password, anos_experiencia, especialidad}
    const {files} = req
    const {foto} = files
    const {name} = foto
    const pathPhoto = `/img/${name}`
    foto.mv(`${__dirname}/public${pathPhoto}`, async (err) => {
        try {
            if (err) throw err
            skater.photo = pathPhoto
            await addSkaterQuery(skater)
            res.status(201).redirect('/login')
        } catch (error) {
            res.status(500).send(error.message)        }
    })
}

const getSkaterController = async (req, res) => {
    const result = await getSkaterQuery()
    res.render('Home', {result})
} 

const skaterLoginController = async (req, res) => {
    try {
    const {email, password} = req.body
    const result = await tokenSkaterQuery(email, password)
    const token = jwt.sign(result, key)
    res.status(200).send(token)
     } catch (error) {
        res.status(500).send(error.message)
    }
}


export {homeController, loginController, registroController, addSkaterController, getSkaterController, skaterLoginController}