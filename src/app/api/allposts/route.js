import connectDB from "@/lib/mongoose";
import Post from "../../../../models/Post.js";

export async function GET(req) {
  try {
    await connectDB();

    const allposts = await Post.find(); // fetch all food items

    return new Response(JSON.stringify(allposts), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    console.error("Fetch error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
    });
  }
}
