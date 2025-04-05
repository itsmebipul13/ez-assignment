import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white text-center py-4">
      <p>&copy; {new Date().getFullYear()} EZ Works. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
