import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongoose';
import mongoose from 'mongoose';
import User from "../../../../models/NewUser.js";



export async function POST(req) {
  await connectDB();
  const body = await req.json();
  body.age = Number(body.age);
  // Optional: sanitize other fields too
  body.name = String(body.name || '').trim();
  body.email = String(body.email || '').trim();
  body.password = String(body.password || '');
  console.log(body)

  try {
    const existing = await User.findOne({ email: body.email });
    if (existing) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    const user = new User(body);
    console.log(user)
    await user.save();
    return NextResponse.json({ message: 'User created successfully' });
  } catch (error) {
    return NextResponse.json({ message: 'Error creating user', error: error.message }, { status: 500 });
  }
}

