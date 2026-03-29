import connectDB from "@/lib/mongoose";
import foodmeals from "@/models/foodmeals";


export async function GET() {
  try {
    await connectDB();

    const items = await foodmeals.find().lean();
    const typedItems = items.map((item) => ({
      ...item,
      type: item.type || "foodmeals",
    }));

    return new Response(JSON.stringify(typedItems), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Fetch error:", error);

    return new Response(
      JSON.stringify({
        error: "Failed to fetch data",
        message: error.message,
        stack: error.stack,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
