import mongoose from 'mongoose';
import process from "node:process";

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log('Already connected to MongoDB');
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected:', db.connection.host);
    console.log('Database Name:', db.connection.name); 
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;
