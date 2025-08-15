import  connectDB  from '@/lib/mongoose';
import Post from '../../../../models/Post.js';

export async function POST(req) {
  try {
    const { title, description, image, author, country, selectedAge, targetDonation } = await req.json();

    
    // ✅ Updated: Now checking for "name"
    if (!title || !description) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
      });
    }

    await connectDB();

    const newPost = await Post.create({
      title,
      description,
      image,
      author,
      country,
      selectedAge,
      targetDonation
    });
    console.log(newPost)

    return new Response(JSON.stringify(newPost), { status: 201 });
  } catch (error) {
    console.error("API error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
