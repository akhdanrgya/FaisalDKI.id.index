import express from "express";
import {
  getGaleri,
  getGaleriById,
  updateGaleri,
  deleteGaleri,
  saveGaleri,
} from "../controllers/GaleriController.js";
// const express = require('express')

const router = express.Router();

router.get("/galeri", getGaleri);
router.get("/galeri/:id", getGaleriById);
router.post("/galeri", saveGaleri);
router.patch("/galeri/:id", updateGaleri);
router.delete("/galeri/:id", deleteGaleri);

export default router;
