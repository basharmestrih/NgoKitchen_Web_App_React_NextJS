// models/NewUser.js
import mongoose from 'mongoose';
// Define schema inline for simplicity
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

export default mongoose.models.User || mongoose.model('User', userSchema);