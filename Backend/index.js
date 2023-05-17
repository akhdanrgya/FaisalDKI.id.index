import express from "express"
import cors from "cors"
import fileUpload from "express-fileupload"
import BeritaRoute from "./routes/BeritaRoute.js"
import GaleriRoute from "./routes/GaleriRoute.js"
import PendukungRoute from "./routes/PendukungRoute.js"
import db from "./config/Database.js";
import router from "./routes/index.js";

import dotenv from 'dotenv'
import cookieParser from "cookie-parser"

dotenv.config()
const app = express()

try {
    await db.authenticate()
    console.log('Authentication Ready....')
} catch (error) {
    console.log(error)
}

app.use(cookieParser())
app.use(cors({ credentials:true, origin:'http://localhost:3000'}))
app.use(express.json())
app.use(fileUpload())
app.use(express.static("public"))
app.use(BeritaRoute)
app.use(GaleriRoute)
app.use(PendukungRoute)
app.use(router)

app.listen(5000, () => console.log("listening port 5000..."))
