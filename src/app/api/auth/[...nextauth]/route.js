import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/lib/mongoose";
import User from "../../../../../models/User.js";

import process from "node:process";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

export const authOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        try {
          await connectDB();
        } catch (error) {
          console.error("Error connecting to MongoDB:", error);
          throw new Error("Database connection failed");
        }

        const user = await User.findOne({ email: credentials.email });
        if (!user) {
          throw new Error("User not found");
        }

        if (credentials.password !== user.password) {
          throw new Error("Invalid password");
        }

        return {
          id: user._id,
          email: user.email,
          name: user.name,
          age: user.age,
        };
      },
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

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
