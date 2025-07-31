import React, { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { motion } from "motion/react";

function Navigation() {
  return (
    <ul className="nav-ul flex flex-col sm:flex-row sm:justify-end space-y-4 sm:space-y-0 sm:space-x-8 uppercase items-center">
      <li className="nav-li  text-white hover:text-gray-300 cursor-pointer transition-colors duration-200">
        <a href="" className="nav-link">
          Home
        </a>
      </li>
      <li className="nav-li text-white hover:text-gray-300 cursor-pointer transition-colors duration">
        <a href="" className="nav-link">
          Stack
        </a>
      </li>
      <li className="nav-li text-white hover:text-gray-300 cursor-pointer transition-colors duration">
        <a href="" className="nav-link">
          Projects
        </a>
      </li>
      <li className="nav-li text-white hover:text-gray-300 cursor-pointer transition-colors duration">
        <a href="" className="nav-link">
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg ">
      <div className="mx-auto c-space max-w-7xl px-6">
        <div className="flex items-center justify-between py-2 sm:py:0">
          <a
            href="/"
            className="text-2xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Dev<span className="text-[#ffb703]">Corp</span>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <IoMenuSharp className="w-6 h-6 text-white" alt="toggle" />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
