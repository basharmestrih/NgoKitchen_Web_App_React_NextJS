"use client";

import { useState } from "react";
import AuthTabs from "./components/AuthTabs.js";
import SignupForm from "./components/SignupForm.js";
import LoginForm from "./components/LoginForm.js";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("signup");

  return (
    <div className="min-h-screen flex items-start md:items-center justify-center bg-gray-100 px-4 font-saira">
  

      <div className="bg-gray-200 w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <AuthTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "signup" ? <SignupForm /> : <LoginForm />}
      </div>
    </div>
  );
}
