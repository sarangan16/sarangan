import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";

const NavItem = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative group text-white/60 hover:text-white transition"
    >
      {children}

      {/* HOVER LINE */}
      <span
        className="
        absolute left-0 -bottom-1
        w-0 h-[1px]
        bg-[#F16D34]
        transition-all duration-300 ease-out
        group-hover:w-full
      "
      />
    </button>
  );
};

const Navbar = ({ heroRef, projectsRef, stackRef, contactRef }) => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const scrollTo = (ref) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/5">
      <div className="h-16 flex items-center justify-between px-6 md:px-16">
        {/* brand */}
        <div
          onClick={() => scrollTo(heroRef)}
          className="text-white text-sm uppercase tracking-[0.35em] cursor-pointer hover:opacity-70 transition"
        >
          <span>
            Raavn<span className="text-[#F16D34] ">Code</span>
          </span>
        </div>

        {/* desktop nav */}
        <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.25em]">
          <NavItem onClick={() => scrollTo(heroRef)}>Home</NavItem>

          <NavItem onClick={() => scrollTo(projectsRef)}>Projects</NavItem>

          <NavItem onClick={() => scrollTo(stackRef)}>Stack</NavItem>

          <NavItem onClick={() => scrollTo(contactRef)}>Contact</NavItem>

          {/* language selector */}
          <button
            onClick={() =>
              i18n.changeLanguage(i18n.language === "en" ? "de" : "en")
            }
            className="ml-4 text-white/40 hover:text-white transition"
          >
            {i18n.language === "en" ? "DE" : "EN"}
          </button>
        </div>

        {/* small screen */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/5 px-6 py-8 space-y-6 text-white/70 uppercase text-sm tracking-widest">
          <button onClick={() => scrollTo(heroRef)} className="block">
            Home
          </button>

          <button onClick={() => scrollTo(projectsRef)} className="block">
            Projects
          </button>

          <button onClick={() => scrollTo(stackRef)} className="block">
            Stack
          </button>

          <button onClick={() => scrollTo(contactRef)} className="block">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
