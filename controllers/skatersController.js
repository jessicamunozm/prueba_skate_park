import path from 'path'
import { addSkaterQuery, getSkaterQuery} from '../queries/skaterQuery.js'
const __dirname = path.resolve()

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

export {addSkaterController, getSkaterController}