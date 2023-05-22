import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";
import db from './config/DataBase.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

dotenv.config()
const app = express



app.use(cookieParser())
app.use(cors({credentials:true, origin: 'http://localhost:3000'}))
app.use(express.json())
app.use(fileUpload())
app.use(express.static("public"))



app.listen(5500, () => console.log('server up and running.....'))
