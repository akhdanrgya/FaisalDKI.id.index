import Galeri from "../models/GaleriModel.js";
import path from "path"
import fs from "fs"

// const fs = require('fs')
// const path = require('path')

export const getGaleri = async(req, res) =>{
    try {
        const response =  await Galeri.findAll()
        res.json(response)
    } catch (error) {
        console.log(error.message)
    }
}
export const getGaleriById = async(req, res) =>{
    try {
        const response =  await Galeri.findOne({
            where: {
                id: req.params.id
            }
        })
        res.json(response)
    } catch (error) {
        console.log(error.message)
    }
}
export const saveGaleri = (req, res) =>{
    if(req.files === null) return res.status(400).json({msg: "No file uploaded"})
    const file = req.files.file
    const fileSize = file.data.length
    const ext = path.extname(file.name)
    const fileName = file.md5 + ext
    const url = `${req.protocol}://${req.get("host")}/galeri/${fileName}`;
    const allowedType = ['.png', '.jpg', '.jpeg']

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid images"})
    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"})

    file.mv(`./public/galeri/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message})
        try {
            await Galeri.create({image: fileName, url: url})
            res.status(201).json({msg: "Galeri Created Succesfuly"})
        } catch (error) {
            console.log(error.message)
        }
    })
}
export const updateGaleri = async(req, res) =>{
    const galeri = await Galeri.findOne({
        where:{
            id: req.params.id
        }
    })
    if(!galeri) return res.status(404).json({msg: "No Data Found"})
    let fileName = ""
    if(req,files === null){
        fileName = Galeri.image
    }else{
        const file = req.files.file
        const fileSize = file.data.length
        const ext = path.extname(file.name)
        fileName = file.md5 + ext
        const allowedType = ['.png', '.jpg', '.jpeg']

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid images"})
        if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"})

        const filepath = `./public/galeri/${galeri.image}`
        fs.unlinkSync(filepath)

        file.mv(`./public/galeri/${fileName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message})
        })
    }
    const url = `${req.protocol}://${req.get("host")}/galeri/${fileName}`;

    try {
        await Galeri.update({ image: fileName, url: url},{
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({msg:"Berita Updated Successfuly"})
    } catch (error) {
        console.log(error.message)
    }
}
export const deleteGaleri = async(req, res) =>{
    const galeri = await Galeri.findOne({
        where:{
            id: req.params.id
        }
    })
    if(!galeri) return res.status(404).json({msg: "No Data Found"})
    try {
        const filepath = `./public/galeri/${galeri.image}`
        fs.unlinkSync(filepath)
        await Galeri.destroy({
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({msg: "Galeri Deleted Successfuly"})
    } catch (error) {
        console.log(error.message)
    }
}