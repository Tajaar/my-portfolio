import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-8">
        <li>
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-blue-500">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/blog" className="hover:text-blue-500">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-500">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-500">
            Contact
          </Link>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;
