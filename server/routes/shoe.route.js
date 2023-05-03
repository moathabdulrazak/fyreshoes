import express from 'express'
import {
  createShoe,
  deleteShoe,
  getShoe,
  getShoes
} from "../controllers/shoe.controller.js";
import { verifyToken } from "../middleware/jwt.js";
const router = express.Router()


router.post("/", verifyToken, createGig )
router.delete("/:id", verifyToken, deleteGig )
router.get("/single/:id",  getGig )
router.get("/", verifyToken, getGigs )

export default router;