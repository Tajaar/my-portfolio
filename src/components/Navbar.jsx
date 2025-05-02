import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { VscProject } from 'react-icons/vsc';
import { FaBlog } from 'react-icons/fa';
import { IoMdPerson } from 'react-icons/io';

function Navbar() {
  return (
    <nav className="bg-[#0e1320] text-white px-6 py-4 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-10 h-10 rounded-full border-2 border-purple-500 shadow-purple-500 shadow-md"
          />
          <Link to="/" className="text-2xl font-bold text-purple-400 hover:text-purple-300 transition duration-300">
            Tarun<span className="text-[#6A0DAD]"></span>
          </Link>
        </div>

        {/* Icon Menu */}
        <ul className="flex space-x-6 text-3xl">
          <li>
            <Link
              to="/"
              className="text-white hover:text-[#9D00FF] transition duration-300 transform hover:scale-125 drop-shadow-[0_0_6px_#9D00FF]"
              title="Home"
            >
              <AiFillHome />
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="text-white hover:text-[#9D00FF] transition duration-300 transform hover:scale-125 drop-shadow-[0_0_6px_#9D00FF]"
              title="Projects"
            >
              <VscProject />
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="text-white hover:text-[#9D00FF] transition duration-300 transform hover:scale-125 drop-shadow-[0_0_6px_#9D00FF]"
              title="Blog"
            >
              <FaBlog />
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white hover:text-[#9D00FF] transition duration-300 transform hover:scale-125 drop-shadow-[0_0_6px_#9D00FF]"
              title="About"
            >
              <IoMdPerson />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
