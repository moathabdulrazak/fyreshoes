import express from "express"
import dotenv from 'dotenv'
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";

const app = express()
dotenv.config()
mongoose.set("strictQuery", true);
const connect = async () => {

  try {
    await mongoose.connect(process.env.MONGO || "not connected");
    console.log("Connected to mongoDB!");
  } catch (error) {
    console.log(error);
  }
};

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json())
app.use(cookieParser())
app.use('/api/auth', authRoute)


app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
});

app.listen(3000, () => {
  connect()
  console.log("backend server is running")
})