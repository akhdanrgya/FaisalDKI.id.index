import express from "express"
import {
    getBerita,
    getBeritaById,
    updateBerita,
    deleteBerita,
    saveBerita
} from '../controllers/BeritaController.js'



const router = express.Router()

router.get('/berita', getBerita)
router.get('/berita/:id', getBeritaById)
router.post('/berita', saveBerita)
router.patch('/berita/:id', updateBerita)
router.delete('/berita/:id', deleteBerita)

export default router