"use client";
import { useSession } from "next-auth/react";

export default function WelcomeMessage() {
  const { data: session } = useSession();

  return (
    <div className="px-6 py-6 font-saira">
      <h2 className="text-2xl font-extrabold text-gray-800 mb-0">
        Pick all types of food you need to set your charity campaign 
      </h2>
      <p className="text-md font-bold text-gray-400 mt-3">
       All orders shipping are affordable by MINTA to help spread our helps to all heroes
      </p>
      {!session && <p className="text-lg text-red-500">You are not logged in.</p>}
    </div>
  );
}
