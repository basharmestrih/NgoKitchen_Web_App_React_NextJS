import mongoose from "mongoose";

const foodMealSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, default: "" },
    image: { type: String, default: "" },
    price: { type: Number, required: true, min: 0 },
    country: { type: String, default: "" },
    category: { type: String, default: "" },
    type: { type: String, required: true, default: "foodmeals" },
    extras: {
      type: [
        {
          name: { type: String, required: true },
          price: { type: Number, default: 0 },
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

const FoodMeal = mongoose.models.FoodMeal || mongoose.model("FoodMeal", foodMealSchema);

export default FoodMeal;
