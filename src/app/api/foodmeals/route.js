import connectDB from "@/lib/mongoose";
import foodmeals from "../../../../models/foodmeals.js";

export async function GET(req) {
  try {
    console.log('connecting')
    await connectDB();

    const items = await foodmeals.find(); // fetch all food items

    return new Response(JSON.stringify(items), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    console.error("Fetch error:", error); // Logs full error for server-side debugging

    return new Response(JSON.stringify({ 
      error: "Failed to fetch data", 
      message: error.message, 
      stack: error.stack 
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
