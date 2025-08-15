// app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/lib/mongoose"; // ✅ correct
import User from "../../../../../models/User.js";

import bcrypt from "bcryptjs";
import process from "node:process";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

export const authOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          await connectDB();
          console.log("✅ Successfully connected to MongoDB.");
        } catch (error) {
          console.error("❌ Error connecting to MongoDB:", error);
          throw new Error("Database connection failed");
        }
      
        // Find user
        const user = await User.findOne({ email: credentials.email });
        if (!user) {
          console.warn("⚠️ User not found:", credentials.email);
          throw new Error("User not found");
        }
      
        // ✅ Compare plain passwords (no bcrypt)
        if (credentials.password !== user.password) {
          console.warn("⚠️ Invalid password attempt for:", credentials.email);
          throw new Error("Invalid password");
        }
      
        console.log("✅ Login successful for:", credentials.email);
        return { id: user._id,
          email: user.email,
          name: user.name,
          age: user.age, };
     
     
     
     
      }
      
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.name = user.name;
        token.age = user.age;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.name = token.name;
      session.user.age = token.age;
      return session;
    },
  },
  

  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

// Export handlers
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
