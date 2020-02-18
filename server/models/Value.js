import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Value = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: false }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Value;
