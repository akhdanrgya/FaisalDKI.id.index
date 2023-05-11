import express from "express"
import cors from "cors"
import fileUpload from "express-fileupload"
import BeritaRoute from "./routes/BeritaRoute.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use(fileUpload())
app.use(express.static("public"))
app.use(BeritaRoute)

app.listen(5000, () => console.log("listening port 5000..."))
