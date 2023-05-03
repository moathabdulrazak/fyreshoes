import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const register = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 10);
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(201).send("user has been created");
  } catch (error) {
    next(error)
  }
};

export const login = async (req, res, next) => {
  try {
    
  } catch (error) {
    next(error)
  }
};
export const logout =  async (req, res, next) => {
  try {
    
  } catch (error) {
    next(error)
  }
};
