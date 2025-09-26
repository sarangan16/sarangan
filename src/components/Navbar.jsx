import React from "react";
import { useTranslation } from "react-i18next";

const Navbar = ({
  scrollContainerRef,
  introRef,
  stackRef,
  projectsRef,
  contactRef,
}) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current && scrollContainerRef.current) {
      const top = sectionRef.current.offsetTop;
      scrollContainerRef.current.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#111827] shadow-lg">
      <div className="h-16 flex items-center justify-between px-6 max-w-7xl mx-auto">
        <div className="flex-1 text-white text-xl font-bold tracking-wide">
          Sara
        </div>

        <div className="flex justify-center space-x-6">
          <button
            onClick={() => scrollToSection(introRef)}
            className="text-sm md:text-base font-medium uppercase text-gray-300 hover:text-red-400 transition"
          >
            About
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

        <div className="flex-1 flex justify-end">
          {i18n.language === "en" && (
            <button
              onClick={() => changeLanguage("de")}
              className="px-4 py-1 rounded-full bg-red-500 hover:bg-red-600 text-white text-sm font-semibold transition"
            >
              DE
            </button>
          )}
          {i18n.language === "de" && (
            <button
              onClick={() => changeLanguage("en")}
              className="px-4 py-1 rounded-full bg-red-500 hover:bg-red-600 text-white text-sm font-semibold transition"
            >
              EN
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
