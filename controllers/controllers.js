import path from "path";
import {addSkaterQuery, getSkatersQuery} from "../queries/queries.js";
import jwt from "jsonwebtoken"
const __dirname = path.resolve()

const addSkaterController = async (req, res) => {
  const { email, nombre, password, anos_experiencia, especialidad } = req.body
  console.log(req.body)
  console.log(req.files)
  const skater = {email, nombre, password, anos_experiencia, especialidad}
  const {foto} = req.files
  const {name} = foto
  const pathPhoto = `/img/${name}`
  foto.mv(`${__dirname}/public${pathPhoto}`, async (err) => {
    try {
      if (err) throw err
      skater.foto = pathPhoto
      await addSkaterQuery(skater)
      res.status(201).redirect("/login")
    } catch (error) {res.status(500).send(error.message)}})}

const getSkatersController = async (req, res) => {
  const skaters = await getSkatersQuery()
  res.render("Home", { skaters })}


export {addSkaterController, getSkatersController}