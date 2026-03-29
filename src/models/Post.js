import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    image: { type: String, default: "" },
    author: { type: String, default: "", trim: true },
    country: { type: String, default: "", trim: true },
    selectedAge: { type: String, default: "", trim: true },
    targetDonation: { type: Number, default: 0, min: 0 },
  },
  { timestamps: true }
);

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
