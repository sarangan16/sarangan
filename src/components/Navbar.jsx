import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../images/logo.svg";

// just logo, contact + language. hero and scroll guide do the rest
const Navbar = ({ heroRef, contactRef }) => {
  const { t, i18n } = useTranslation();
  const go = (ref) => ref?.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a] backdrop-blur-md border-b border-white/5">
      {/* same container as the sections so the logo lines up with the content */}
      <div className="px-6 md:px-16">
        <div className="h-16 max-w-5xl mx-auto flex items-center justify-between">
          <button onClick={() => go(heroRef)} className="hover:opacity-70 transition">
            <img src={logo} alt="Sarangan" className="h-8 w-auto" />
          </button>

          <div className="flex items-center gap-6">
            <button
              onClick={() => go(contactRef)}
              className="relative group text-sm text-white/60 hover:text-white transition"
            >
              {t("contact.title")}
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-[#F16D34] transition-all duration-300 group-hover:w-full" />
            </button>

            <button
              onClick={() => i18n.changeLanguage(i18n.language === "en" ? "de" : "en")}
              className="px-3 py-1 border border-[#F16D34]/40 rounded-full text-xs tracking-[0.25em] text-[#F16D34] hover:bg-[#F16D34] hover:text-black transition"
            >
              {i18n.language === "en" ? "DE" : "EN"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
