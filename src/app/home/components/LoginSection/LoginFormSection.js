"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, getSession } from "next-auth/react";
import { LoadingSpinner } from "../../../community/components/LoadingIndicator/LoadingIndicator.js";

export default function LoginFormSection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res.ok) {
      const session = await getSession();
      console.log("Logged-in session:", session);
      router.push("/store");
    } else {
      alert("Login failed");
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <LoadingSpinner size={80} />
        </div>
      )}

      <form
        onSubmit={handleLogin}
        className="bg-white p-6 md:p-8 rounded-2xl w-full md:w-1/2 shadow-lg mx-auto"
      >
        <h2 className="font-saira text-xl md:text-2xl font-extrabold mb-6 text-center text-gray-800">
          Login to NGO Kitchen
        </h2>

        <div className="mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="block w-full p-3 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            required
          />
        </div>

        <div className="relative mb-6">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="block w-full p-3 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-blue-600 font-semibold hover:underline"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <button
            type="submit"
            className="w-full sm:w-1/2 bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
          >
            Login as NGO
          </button>
          <button
            type="submit"
            className="w-full sm:w-1/2 bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors"
          >
            Login as Donor
          </button>
        </div>

        <div className="flex items-center justify-center mb-4">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="px-3 text-gray-500 text-sm">or</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        <button
          type="button"
          onClick={() => alert("Handle Google login here")}
          className="flex items-center justify-center gap-3 w-full border border-gray-300 py-3 rounded-lg text-sm font-bold hover:bg-gray-50 transition-all"
        >
          <img
            src="https://th.bing.com/th/id/R.96c1a6566397efcf7de758fd2a6f116a?rik=LwK4OM1JQPW06A&pid=ImgRaw&r=0"
            alt="Google"
            className="h-5 w-5"
          />
          Continue with Google
        </button>

        <div className="mt-6 text-center text-sm text-gray-600 font-medium">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline font-bold">
            Sign up now
          </a>
        </div>
      </form>
    </>
  );
}
