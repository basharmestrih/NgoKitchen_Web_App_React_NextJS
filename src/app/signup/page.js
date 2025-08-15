"use client";

import { useState } from "react";
import AuthTabs from "./components/AuthTabs.js";
import SignupForm from "./components/SignupForm.js";
import LoginForm from "./components/LoginForm.js";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("signup");

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100 px-4 font-saira">
      <div className="absolute top-3 left-0 max-w-sm p-4">
    
      </div>

      <div className="bg-gray-200 w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <AuthTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "signup" ? <SignupForm /> : <LoginForm />}
      </div>
    </div>
  );
}
