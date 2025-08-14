// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: { type: String, required: true, unique: true },
  password: { type: String }, // only for credentials provider
});

export default mongoose.models.User || mongoose.model('User', userSchema);
