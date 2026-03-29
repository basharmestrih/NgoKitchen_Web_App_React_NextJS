"use client";

import { useState } from "react";
import { LoadingSpinner } from "../../community/components/LoadingIndicator/LoadingIndicator.js";
import WelcomePopup from "./WelcomePopup.js";
export default function SignupForm() {
  const [form, setForm] = useState({ name: '', age: '', email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setShowPopup(false);

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setMessage(data.message);
      setShowPopup(true);
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
      setShowPopup(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-8 h-96 relative z-10">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required className="p-3 border rounded-lg" />
        <input name="age" value={form.age} onChange={handleChange} type="number" placeholder="Age" required className="p-3 border rounded-lg" />
        <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email" required className="p-3 border rounded-lg" />
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="p-3 border rounded-lg w-full"
          />

        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
          disabled={loading}
        >
          Register
        </button>
      </form>

      {/* Loading overlay */}
      {loading && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          aria-label="Loading"
        >
          <LoadingSpinner size={80} />
        </div>
      )}

      {showPopup && (
       <WelcomePopup
          message={"Your account has been created successfully, Give it a try!"}
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
}
