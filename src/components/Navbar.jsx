import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow px-4 py-2 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">EZ Works</div>
      <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Why EZ</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button className="bg-blue-600 text-white px-4 py-1 rounded-md">Get Started</button>
    </nav>
  );
};

export default Navbar;
