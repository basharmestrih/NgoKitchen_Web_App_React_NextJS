import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  try {
    // Already connected?
    if (cached.conn) {
      console.log("[MongoDB] Already connected");
      console.log("[MongoDB] Host:", cached.conn.connection.host);
      console.log("[MongoDB] Database:", cached.conn.connection.name);
      console.log("[MongoDB] ReadyState:", cached.conn.connection.readyState);
      return cached.conn;
    }

    // No promise yet?
    if (!cached.promise) {
      if (!process.env.MONGODB_URI) {
        throw new Error("MONGODB_URI is missing");
      }

      console.log("[MongoDB] Connecting to:", process.env.MONGODB_URI);

      // Create a new connection promise
      cached.promise = mongoose.connect(process.env.MONGODB_URI, {
        bufferCommands: false,
      });
    }

    // Wait for connection
    cached.conn = await cached.promise;

    // Log connection details
    console.log("[MongoDB] Connected successfully!");
    console.log("[MongoDB] Host:", cached.conn.connection.host);
    console.log("[MongoDB] Database:", cached.conn.connection.name);
    console.log("[MongoDB] ReadyState:", cached.conn.connection.readyState);
    console.log("[MongoDB] Mongoose version:", mongoose.version);

    return cached.conn;
  } catch (error) {
    console.error("[MongoDB] Connection error:", error);
    throw error; // Do not crash server in Next.js
  }
};

export default connectDB;