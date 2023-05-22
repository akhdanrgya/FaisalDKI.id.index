import Galeri from "../models/GaleriModel.js"
import fs from "fs"
import path from "path"

export const getGaleri2 = async(req,res) => {
    try {
        const response = await Galeri.findAll()
        res.json(response)
    } catch (error) {
        console.log(error.message)
    }
}
export const getGaleriById2= async(req,res) => {
    try {
        const response = await Galeri.findOne({
            where: {
                id: req.params.id
            }
        })
        res.json(response)
    } catch (error) {
        console.log(error.message)
    }
}
export const saveGaleri2 = (req,res) => {
    if(req.files === null) return res.status(400).json({msg:'No file Uploaded'})
    const file = req.files.file
    const fileSize = file.data.length
    const ext = path.extname(file.name)
    const fileName = file.md5 + ext
    const url = `${req.protocol}://${req.get("host")}/galeri/${fileName}`;
    const allowedType = ['.png', '.jpg', '.jpeg']

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg:'Invalid Image'})
    if(fileSize > 5000000) return res.status(422).json({msg:'Image must be less than 5 MB'})

    file.mv(`./public/image/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message})
        try {
            await Galeri.create({title: name, image: fileName, url: url, artikel: artikel})
            res.status(201).json({msg: 'Galeri created successfuly'})
        } catch (error) {
            console.log(error.message)
        }
    })
}

export const udateGaleri2 = async(req,res) => {
    const galeri = await Galeri.findOne({
        where: {
            id: req.params.id
        }
    })
    if(!galeri) return res.status(404).json({msg:'No data found'})
    let fileName = ""
    if(req.file === null) {
        fileName = Galeri.image
    }else {
        const file = req.files.file
        const fileSize = file.data.length
        const ext = path.extname(file.name)
        fileName = file.md5 + ext
        const allowedType = ['png', 'jpg', 'jpeg', 'svg']

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg:'Invalid images'})
        if (fileSize > 5000000) return res.status(422).json({msg: 'Image must be less than 5 MB'})

        const filepath = `./public/galeri${galeri.image}`
        fs.unlinkSync(filepath)

        file.mv(`.public/galeri/${fileName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message})
        })
    }
    const url = `${req.protocol}://${req.get("host")}/galeri/${fileName}`

    try {
        await Galeri.update({title: name, image: fileName, url: url},{
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({msg: "Galeri updated successfuly"})
    } catch (error) {
        console.log(error.message)
    }
}
export const deleteGaleri2 = async(req,res) => {
    const galeri = await Galeri.findOne({
        where:{
            id: req.params.id
        }
    })
    if(!galeri) return res.status(404).json({msg: "No data found"})
    try {
        const filepath = `./public/galeri/${galeri.image}`
        fs.unlinkSync(filepath)
        await Galeri.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({msg: "Galeri deleted successfuly"})
    } catch (error) {
        console.log(error.message)
    }
}