import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="bg-white shadow-md lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="text-2xl font-bold text-blue-600">
              My Portfolio
            </NavLink>
          </div>
          <div className="hidden sm:flex sm:space-x-8">
            <NavLink
              to="/"
              className="text-gray-500 hover:text-blue-600 transition duration-300"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-gray-500 hover:text-blue-600 transition duration-300"
            >
              About
            </NavLink>
            <NavLink
              to="/portfolio"
              className="text-gray-500 hover:text-blue-600 transition duration-300"
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/blog"
              className="text-gray-500 hover:text-blue-600 transition duration-300"
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className="text-gray-500 hover:text-blue-600 transition duration-300"
            >
              Contact
            </NavLink>
            <NavLink
              to="/resume"
              className="text-gray-500 hover:text-blue-600 transition duration-300"
            >
              Resume
            </NavLink>
          </div>
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-blue-600 transition duration-300"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ duration: 0.5 }}
            className="sm:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink
                to="/"
                onClick={toggleMenu}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-blue-600 transition duration-300"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={toggleMenu}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-blue-600 transition duration-300"
              >
                About
              </NavLink>
              <NavLink
                to="/portfolio"
                onClick={toggleMenu}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-blue-600 transition duration-300"
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/blog"
                onClick={toggleMenu}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-blue-600 transition duration-300"
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact"
                onClick={toggleMenu}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-blue-600 transition duration-300"
              >
                Contact
              </NavLink>
              <NavLink
                to="/resume"
                onClick={toggleMenu}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-blue-600 transition duration-300"
              >
                Resume
              </NavLink>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.div>
  );
}
