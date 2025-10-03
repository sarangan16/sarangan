import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";

const Navbar = ({
  scrollContainerRef,
  introRef,
  stackRef,
  projectsRef,
  contactRef,
}) => {
  const { i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setMenuOpen(false);
  };

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current && scrollContainerRef.current) {
      const top = sectionRef.current.offsetTop;
      scrollContainerRef.current.scrollTo({ top, behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#111827] shadow-lg">
      <div className="h-16 flex items-center justify-between px-6 max-w-7xl mx-auto">
        <div
          onClick={() => scrollToSection(introRef)}
          className="flex-1 text-white text-xl font-bold tracking-wide cursor-pointer"
        >
          Sarangan
        </div>

        <div className="hidden sm:flex justify-center space-x-6">
          <button
            onClick={() => scrollToSection(introRef)}
            className="text-sm md:text-base font-medium uppercase text-gray-300 hover:text-red-400 transition"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection(stackRef)}
            className="text-sm md:text-base font-medium uppercase text-gray-300 hover:text-red-400 transition"
          >
            Stack
          </button>
          <button
            onClick={() => scrollToSection(projectsRef)}
            className="text-sm md:text-base font-medium uppercase text-gray-300 hover:text-red-400 transition"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection(contactRef)}
            className="text-sm md:text-base font-medium uppercase text-gray-300 hover:text-red-400 transition"
          >
            Contact
          </button>
        </div>

        <div className="hidden sm:flex flex-1 justify-end">
          {i18n.language === "en" ? (
            <button
              onClick={() => changeLanguage("de")}
              className="px-4 py-1 rounded-full bg-red-500 hover:bg-red-600 text-white text-sm font-semibold transition"
            >
              DE
            </button>
          ) : (
            <button
              onClick={() => changeLanguage("en")}
              className="px-4 py-1 rounded-full bg-red-500 hover:bg-red-600 text-white text-sm font-semibold transition"
            >
              EN
            </button>
          )}
        </div>

        <button
          className="sm:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="sm:hidden bg-[#1f2937] px-6 py-4 space-y-4">
          <button
            onClick={() => scrollToSection(introRef)}
            className="block w-full text-left text-gray-300 hover:text-red-400 transition"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection(stackRef)}
            className="block w-full text-left text-gray-300 hover:text-red-400 transition"
          >
            Stack
          </button>
          <button
            onClick={() => scrollToSection(projectsRef)}
            className="block w-full text-left text-gray-300 hover:text-red-400 transition"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection(contactRef)}
            className="block w-full text-left text-gray-300 hover:text-red-400 transition"
          >
            Contact
          </button>

          <div className="pt-4">
            {i18n.language === "en" ? (
              <button
                onClick={() => changeLanguage("de")}
                className="w-full px-4 py-2 rounded-full bg-red-500 hover:bg-red-600 text-white text-sm font-semibold transition"
              >
                DE
              </button>
            ) : (
              <button
                onClick={() => changeLanguage("en")}
                className="w-full px-4 py-2 rounded-full bg-red-500 hover:bg-red-600 text-white text-sm font-semibold transition"
              >
                EN
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
