import path from "path";
import {addSkaterQuery, getSkatersQuery, getSkaterQuery, deleteSkaterQuery, editSkaterQuery} from "../queries/queries.js";
import jwt from "jsonwebtoken"
const __dirname = path.resolve()

const addSkaterController = async (req, res) => {
  const {email, nombre, password, anos_experiencia, especialidad} = req.body
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

const getSkaterController = async (req, res) => {
  try {
    const {email, password} = req.body
    const result = await getSkaterQuery(email, password)
    const secretKey = process.env.SECRET_KEY
    const token = jwt.sign(result, secretKey, {expiresIn:'1m'})
    res.status(200).send(token)
  } catch (error) {res.status(500).send(error.message)}}

  const deleteSkaterController = async (req, res) => {
    try {
      const id = req.params.id
      await deleteSkaterQuery(id)
      res.status(200).send('Participante eliminado exitosamente')
    } catch (error) {res.status(500).send(error)}}

const editSkaterController = async (req, res) => {
  try {
    const {email }= req.query
    const {nombre,password,anos_experiencia,especialidad} = req.body
    const skater = {nombre,password,anos_experiencia,especialidad}
    const result = await editSkaterQuery(skater,email)
    res.send(result)
  } catch (error) {res.status(500).send(error.message)}}

  const tokenController = async (req, res) => {
    const token = req.query.token
    jwt.verify(token, process.env.SECRET_KEY, (err, skater) => {
     if (err) {console.log(err);
    } res.render("Perfil", {skater})})}
  

export {
  addSkaterController, 
  getSkatersController, 
  getSkaterController, 
  deleteSkaterController, 
  editSkaterController,
  tokenController}