import React from "react";

const WelcomePopup = ({ message, onClose }) => {
  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 z-50"
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="popup-title"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
        <p id="popup-title" className="mb-4 text-lg font-semibold">
          {message}
        </p>
        <a
  href="/community" // change this to your actual route
  className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 inline-block text-center"
>
  Start your trip
</a>

      </div>
    </div>
  );
};

export default WelcomePopup;
