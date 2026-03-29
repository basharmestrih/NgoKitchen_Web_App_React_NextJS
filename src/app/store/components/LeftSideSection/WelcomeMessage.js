"use client";
import { useSession } from "next-auth/react";

export default function WelcomeMessage() {
  const { data: session } = useSession();

  return (
    <div className="px-4 py-6 sm:px-0 font-saira text-center sm:text-left">
      <h2 className="text-2xl font-extrabold text-gray-800 mb-2 sm:text-3xl md:text-4xl">
        Pick all types of food you need to set your charity campaign
      </h2>
      <p className="text-sm sm:text-base font-bold text-gray-500 mt-3 max-w-3xl mx-auto sm:mx-0">
        All orders shipping are affordable by MINTA to help spread our helps to all heroes
      </p>
      {!session && (
        <p className="text-sm sm:text-base text-red-500 mt-3">You are not logged in.</p>
      )}
    </div>
  );
}
