import mongoose from "mongoose";
const { Schema } = mongoose;

const shoeSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    totalHype: {
      type: Number,
      default: 0,
    },
    hypeNumber: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: true,
    },
    cover: {
      type: String,
      required: false,
    },
    images: {
      type: [String],
      required: false,
    },
    deliveryTime: {
      type: Number,
      required: true,
    },
    sales: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Shoe", shoeSchema);