import React from "react";


const ContactPage = () => {
  return (
    <div className="mih-h-screen bg-gray-100 flex flex-col items-start justify-center ">
  
      <div className=" p-10 pt-5 rounded-lg overflow-hidden flex w-full">
        {/* Left side - Form */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-bold text-[#0A3966] mb-2">Get in Touch</h2>
          <p className="text-gray-600 mb-6">Feel free to drop us a message below!</p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-3 rounded-md bg-gray-300 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-3 rounded-md bg-gray-300 focus:outline-none"
            />
            <textarea
              placeholder="Type your message here"
              rows="4"
              className="w-full p-3 rounded-md bg-gray-300 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-[#0A3966] text-white font-bold px-6 py-3 rounded-full hover:bg-[#06274c] transition"
            >
              SEND
            </button>
          </form>
        </div>

        {/* Right side - Contact Info */}
        <div className="w-full md:w-1/2 bg-blue-600 text-white p-10 flex flex-col justify-between rounded-lg rounded-r-lg">
          <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-xl">📍</span>
              23, Dada Estate, Osun, Nigeria.
            </li>
            <li className="flex items-center gap-2">
              <span className="text-xl">✉️</span>
              pheesahdesigns@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <span className="text-xl">💬</span>
              Pheesahuiux
            </li>
            <li className="flex items-center gap-2">
              <span className="text-xl">📞</span>
              07066979133
            </li>
          </ul>
          <div className="flex gap-4 text-xl mt-8">
            <span>📷</span> <span>📘</span> <span>🐦</span> <span>🎵</span> <span>🔗</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
