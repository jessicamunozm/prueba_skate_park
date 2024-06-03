import express from "express"
import router from "./router/router.js"
import { engine } from "express-handlebars"
import path from "path"
import fileUpload from "express-fileupload"

process.loadEnvFile()

const app = express()
const PORT = 3000
const __dirname = path.resolve()

app.use (express.json())
app.use (express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))

app.use(
    fileUpload({
        limits: { fileSize: 5000000 },
        abortOnLimit: true,
        responseOnLimit: 'El archivo es demasiado grande',
    })
)

app.set('view engine', 'handlebars')
app.set()
app.engine ('handlebars', engine())
app.use('/', router)

engine ({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),
})

app.use(express.urlencoded ({ extended: true }))

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`))