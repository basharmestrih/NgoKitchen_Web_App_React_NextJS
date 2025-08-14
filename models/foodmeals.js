import mongoose from "mongoose";

const foodItemSchema = new mongoose.Schema({
  title: String,
  country: String,
  category: String,
  image: String,
  price: Number,
});

export default mongoose.models.foodmeals || mongoose.model("foodmeals", foodItemSchema);
