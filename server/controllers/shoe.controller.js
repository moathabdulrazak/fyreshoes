import Shoe from '../models/shoe.model.js'
import createError from "../utils/createError.js"

export const createShoe = async (req, res, next) => {
  const newShoe = new Shoe({
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
    const shoe  = await Shoe.findById(req.params.id)

    // @ts-ignore
    if(shoe.userId !== req.userId ) return next(createError(403, "You can only delete your shoe."))

    await Shoe.findByIdAndDelete(req.params.id)
    // @ts-ignore
    res.status(200).send(`Shoe at this  ${shoe.title} has been deleted`)
  } catch (error) {
    next(error)
  }
}

export const getShoe = async (req, res, next) => {
  try {
    const shoe = await Shoe.findById(req.params.id)
    // @ts-ignore
    if(!shoe) return next(createError(404, `No shoe has been found at this id `))
    res.status(200).send(shoe)
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