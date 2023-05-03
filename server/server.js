import express from "express"
import dotenv from 'dotenv'
import mongoose from "mongoose";

const app = express()
dotenv.config()

const connect = async () => {

  try {
    await mongoose.connect(process.env.MONGO || "not connected");
    console.log("Connected to mongoDB!");
  } catch (error) {
    console.log(error);
  }
};
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
});

app.listen(3000, () => {
  connect()
  console.log("backend server is running")
})