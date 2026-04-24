import React, { useRef, useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/Techstack";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import "./components/i18n";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const stackRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, [i18n]);

  return (
    <div className="bg-[#0a0a0a] text-white">
      <Navbar
        heroRef={heroRef}
        projectsRef={projectsRef}
        stackRef={stackRef}
        contactRef={contactRef}
      />

      <main>
        {/* HERO */}
        <section ref={heroRef}>
          <Hero projectsRef={projectsRef} />
        </section>

        {/* PROJECTS */}
        <section ref={projectsRef}>
          <Projects />
        </section>

        {/* STACK */}
        <section ref={stackRef}>
          <TechStack />
        </section>

        {/* CONTACT */}
        <section ref={contactRef}>
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
