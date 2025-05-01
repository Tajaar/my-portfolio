import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-[#0e1320] text-white px-6 py-4 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <img src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full border-2 border-purple-500 shadow-purple-500 shadow-md" />
        <Link to="/" className="text-2xl font-bold text-purple-400 hover:text-purple-300 transition duration-300">
          Tarun<span className="text-[#6A0DAD]"></span>
        </Link>
      </div>
        {/* Menu */}
        <ul className="flex space-x-6 text-lg font-medium">
          {['Home', 'Projects', 'Blog', 'About'].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                className="relative text-white hover:text-[#8e2de2] transition duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#8e2de2] hover:after:w-full after:transition-all after:duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
