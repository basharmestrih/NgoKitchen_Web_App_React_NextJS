"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn,getSession  } from "next-auth/react";
import { GradientCircularProgress } from "../../../community/components/LoadingIndicator/LoadingIndicator.js"; // import your gradient spinner

export default function LoginFormSection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
      setLoading(true);
    

   if (res.ok) {
    // Wait for the session to be available
    const session = await getSession();
    console.log("🟢 Logged-in session:", session);

    router.push("/");
  } else {
    alert("Login failed");
     setLoading(false);
  }
};


  return (
    <>
      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <GradientCircularProgress size={80} />
        </div>
      )}
      
    <form onSubmit={handleLogin} className="bg-white p-8 rounded-2xl w-1/2 shadow-lg">
      <h2 className="font-saira text-2xl font-extrabold mb-6 text-center text-gray-800">Login to your NGO Kitchen account</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="block w-full mb-4 p-3 border border-gray-300 rounded-lg"
        required
      />
      <div className="relative mb-4">
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="block w-full p-3 border border-gray-300 rounded-lg"
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-3 text-sm text-blue-600 hover:underline"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      <div className="mb-6 text-left">
        <a href="#" className="text-sm text-blue-600 hover:underline">
          Forgot password?
        </a>
      </div>

      <div className="flex justify-between gap-4 mb-4">
        <button
          type="submit"
          className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-sm font-extrabold"
        >
          Login as NGO
        </button>
        <button
          type="submit"
          className="w-1/2 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg text-sm font-extrabold"
        >
          Login as Donor
        </button>
      </div>

      <div className="flex items-center justify-center mb-2">
        <span className="text-gray-500 text-sm">or</span>
      </div>

      <button
        type="button"
        onClick={() => alert("Handle Google login here")}
        className="flex items-center justify-center gap-2 w-full border border-gray-300 py-3 rounded-lg text-sm font-medium hover:bg-gray-100"
      >
        <img src="https://th.bing.com/th/id/R.96c1a6566397efcf7de758fd2a6f116a?rik=LwK4OM1JQPW06A&pid=ImgRaw&r=0" alt="Google" className="h-5 w-5" />
        Continue with Google
      </button>

      <div className="mt-4 text-center text-sm text-gray-600">
        Don’t have an account?{" "}
        <a href="/signup" className="text-blue-600 hover:underline font-medium">
          Sign up now
        </a>
      </div>
    </form>
     </>
  );
}
