import Pendukung from "../models/PendukungModel.js"
import path from "path"
import fs from "fs"
import { json } from "sequelize"

export const getPendukung = async(req,res) => {
    try {
        const response = await Pendukung.findAll()
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message)
    }
}
export const getPendukungById = async(req,res) => {
    try {
        const response = await Pendukung.findOne({
            where:{
                id: req.params.id
            }
        })
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message)
    }
}
export const createPendukung = async(req,res) => {
    try {
        await Pendukung.create(req.body)
        res.status(200).json({msg: "Pendukung Created"})
    } catch (error) {
        console.log(error.message)
    }
}
export const updatePendukung = async(req,res) => {
    try {
        await Pendukung.update(req.body,{
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({msg: "Pendukung Updated"})
    } catch (error) {
        console.log(error.message)
    }
}
export const deletePendukung = async(req,res) => {
    try {
        await Pendukung.destroy({
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({msg: "Pendukung Deleted"})
    } catch (error) {
        console.log(error.message)
    }
}


