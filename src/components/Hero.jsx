import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="min-h-screen bg-[#011226] text-white flex flex-col justify-center items-center relative px-4">
      {/* 🔹 This is the dark background */}
      {/* min-h-screen makes it full screen height */}
      {/* bg-[#011226] matches screenshot background */}
      
      {/* 🔹 Top Right Buttons */}
      <div className="absolute top-4 right-4 flex gap-4 text-xs font-semibold">
        {/* These buttons appear in the top right */}
        <button className="border border-white px-3 py-1 hover:bg-white hover:text-black transition">SERVICES</button>
        <button className="border border-white px-3 py-1 hover:bg-white hover:text-black transition">TOOLS</button>
        <button className="border border-white px-3 py-1 hover:bg-white hover:text-black transition">LOGIN</button>
      </div>

      {/* 🔹 Center Logo */}
      <div className="flex flex-col items-center mt-16">
        {/* Simulated EZ Logo */}
        <div className="w-20 h-20 bg-black rounded-lg flex items-center justify-center border-2 border-cyan-500">
          <span className="text-3xl font-bold text-cyan-400">EZ</span>
        </div>
        <h1 className="mt-4 text-lg sm:text-xl font-semibold">Innovating with AI</h1>
      </div>

      {/* 🔹 Search Bar */}
      <div className="mt-8 flex items-center border rounded px-3 py-2 bg-gradient-to-r from-gray-700 to-black">
  <input
    type="text"
    placeholder='Search for "Presentation Design"'
    className="bg-transparent text-white outline-none placeholder-gray-300"
  />
  <FaSearch className="ml-2 text-white" />

      </div>
    </div>
  );
}
