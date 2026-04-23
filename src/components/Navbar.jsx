import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";

const Navbar = ({ introRef, stackRef, projectsRef, contactRef }) => {
  const { i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setMenuOpen(false);
  };

  const scrollTo = (ref) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="h-16 flex items-center justify-between px-6 max-w-7xl mx-auto">
        {/* My Brand */}
        <div
          onClick={() => scrollTo(introRef)}
          className="text-white text-lg tracking-widest uppercase cursor-pointer hover:opacity-70 transition"
        >
          Sarangan
        </div>

        {/* Nav Links */}
        <div className="hidden sm:flex gap-10 text-sm uppercase tracking-wide text-white/60">
          <button
            onClick={() => scrollTo(introRef)}
            className="hover:text-white transition"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo(stackRef)}
            className="hover:text-white transition"
          >
            Stack
          </button>
          <button
            onClick={() => scrollTo(projectsRef)}
            className="hover:text-white transition"
          >
            Projects
          </button>
          <button
            onClick={() => scrollTo(contactRef)}
            className="hover:text-white transition"
          >
            Contact
          </button>
        </div>

        {/* Language Change */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={() => changeLanguage(i18n.language === "en" ? "de" : "en")}
            className="text-xs uppercase tracking-widest text-white/50 hover:text-white transition"
          >
            {i18n.language === "en" ? "DE" : "EN"}
          </button>
        </div>

        {/* Mobile screen menu hid */}
        <button
          className="sm:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* mobile menu */}
      {menuOpen && (
        <div className="sm:hidden bg-black border-t border-white/5 px-6 py-6 space-y-5 text-white/70 uppercase text-sm tracking-wide">
          <button
            onClick={() => scrollTo(introRef)}
            className="block hover:text-white"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo(stackRef)}
            className="block hover:text-white"
          >
            Stack
          </button>
          <button
            onClick={() => scrollTo(projectsRef)}
            className="block hover:text-white"
          >
            Projects
          </button>
          <button
            onClick={() => scrollTo(contactRef)}
            className="block hover:text-white"
          >
            Contact
          </button>

          <button
            onClick={() => changeLanguage(i18n.language === "en" ? "de" : "en")}
            className="pt-4 text-white/60 hover:text-white transition"
          >
            {i18n.language === "en" ? "Switch to DE" : "Switch to EN"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
