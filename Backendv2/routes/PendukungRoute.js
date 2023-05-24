import express from "express"
import {
    getPendukung,
    getPendukungById,
    createPendukung,
    updatePendukung,
    deletePendukung

} from '../controllers/PendukungController.js'
// const express = require('express')

const router = express.Router()

router.get('/pendukung', getPendukung)
router.get('/pendukung/:id', getPendukungById)
router.post('/pendukung', createPendukung)
router.patch('/pendukung/:id', updatePendukung)
router.delete('/pendukung/:id', deletePendukung)


export default router