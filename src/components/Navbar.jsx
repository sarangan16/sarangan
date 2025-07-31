import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-gray-900 ">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py:0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Sarangan
          </a>
          <button onClick={() => setIsOpen(!isOpen)}>
            <img src={isOpen ? "" : ""} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
