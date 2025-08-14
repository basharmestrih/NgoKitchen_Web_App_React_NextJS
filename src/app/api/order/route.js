import connectDB from '@/lib/mongoose';
import Order from '../../../../models/Order.js';

export async function POST(req) {
  try {
    await connectDB();

    const { userName, items } = await req.json();

    // Optional: validate each item's structure
    const formattedItems = items.map(item => ({
      name: item.name,
      quantity: item.quantity, // Default to 1 if not provided
      extras: item.extras || []
    }));
    

    const newOrder = await Order.create({
      userName,
      items: formattedItems
    });
    console.log(JSON.stringify({ success: true, order: newOrder }))

    return new Response(JSON.stringify({ success: true, order: newOrder }), {
      status: 201,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Order creation error:", error);

    return new Response(JSON.stringify({ success: false, error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
