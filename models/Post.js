// models/Post.js
import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  targetDonation: {
    type: Number,
  },
   author: {
    type: String,
  },
  country: {
    type: String,
  },
  selectedAge: {
    type: String,
  },
 
 
},);

export default mongoose.models.Post || mongoose.model('Post', PostSchema);
