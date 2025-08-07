import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-white/70">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-4">
          <a href="/"></a>
          <nav className="hidden sm:flex gap-6 text-neutral-700">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>

        {isOpen && (
          <nav className="flex flex-col gap-4 pb-4 sm:hidden text-center text-neutral-700">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
        )}
      </div>
    </div>
  );
}

export default Navbar;
