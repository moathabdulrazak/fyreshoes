import shoe from '../models/shoe.model.js'
import createError from "../utils/createError.js"

export const createShoe = async (req, res, next) => {
  const newShoe = new shoe({
    userId: req.userId,
    ...req.body
  })
  try {
    const savedShoe = await newShoe.save()
    res.status(201).json(savedShoe)
  } catch (error) {
    next(error)
  }
}


export const deleteShoe = async (req, res, next) => {

  try {
      
  } catch (error) {
    next(error)
  }
}

export const getShoe = async (req, res, next) => {
  try {
      
  } catch (error) {
    next(error)
  }
}

export const getShoes = async (req, res, next) => {
    try {
      
    } catch (error) {
      next(error)
    }
}