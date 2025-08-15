"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res.ok) router.push("/");
    else alert("Login failed");
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-y-8 h-96">
      <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" required className="p-3 border rounded-lg" />
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="p-3 border rounded-lg w-full"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-3 text-sm text-blue-600 hover:underline"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
      <div className="text-right">
        <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
      </div>
      <button type="submit" className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">Login</button>
      <div className="text-center text-sm text-gray-500">or</div>
      <button
        type="button"
        onClick={() => alert('Handle Google login here')}
        className="flex items-center justify-center gap-2 border py-3 rounded-lg text-sm font-medium hover:bg-gray-100"
      >
        <img src="https://th.bing.com/th/id/R.96c1a6566397efcf7de758fd2a6f116a?rik=LwK4OM1JQPW06A&pid=ImgRaw&r=0" alt="Google" className="h-5 w-5" />
        Continue with Google
      </button>
    </form>
  );
}
