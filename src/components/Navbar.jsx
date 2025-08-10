import React from "react";
import { useTranslation } from "react-i18next";
import logo3 from "../images/logo3.png";

const Navbar = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="flex justify-center items-center p-4">
        <div className="px-6 flex justify-between w-full items-center">
          <div className="text-xl font-bold">
            <img src={logo3} alt="Logo" height="46" width="46" />
          </div>

          <div className="flex space-x-4">
            {i18n.language === "en" && (
              <button
                onClick={() => changeLanguage("de")}
                className="px-4 py-1 rounded bg-[#EF4444] text-white focus:outline-none"
              >
                DE
              </button>
            )}

            {i18n.language === "de" && (
              <button
                onClick={() => changeLanguage("en")}
                className="px-4 py-1 rounded bg-[#EF4444] text-white focus:outline-none"
              >
                EN
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
