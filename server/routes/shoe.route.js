import express from 'express'
import {
  createShoe,
  deleteShoe,
  getShoe,
  getShoes
} from "../controllers/shoe.controller.js";
import { verifyToken } from "../middleware/jwt.js";
const router = express.Router()


router.post("/", verifyToken, createShoe )
router.delete("/:id", verifyToken, deleteShoe )
router.get("/single/:id",  getShoe )
router.get("/",  getShoes )

export default router;