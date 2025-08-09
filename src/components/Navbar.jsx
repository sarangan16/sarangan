import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../images/logo.png";

const Navbar = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto flex justify-center items-center p-4">
        <div className="flex justify-between w-full max-w-screen-lg items-center">
          <div className="text-xl font-bold">
            <img src={logo} alt="Logo" height="50" width="50" />
          </div>

          <div className="flex space-x-4">
            <button
              onClick={() => changeLanguage("de")}
              className="px-3 py-1 rounded hover:bg-[#FFCC00] focus:outline-none"
            >
              DE
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className="px-3 py-1 rounded hover:bg-blue-400 focus:outline-none"
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
