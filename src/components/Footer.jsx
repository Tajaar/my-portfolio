// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto text-center">
        <p>&copy; 2025 My Portfolio. All Rights Reserved.</p>
        <div className="mt-4">
          <a href="https://github.com/tajaar" target="_blank" rel="noopener noreferrer" className="text-blue-400 mx-2">GitHub</a>
          <a href="https://linkedin.com/tajaar" target="_blank" rel="noopener noreferrer" className="text-blue-400 mx-2">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
