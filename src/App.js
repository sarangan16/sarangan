import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/Techstack";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import "./components/i18n";
import { useTranslation } from "react-i18next";
import Loader from "./components/Loader";

function App() {
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(true);

  // SECTION REFS (THIS FIXES EVERYTHING)
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const stackRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, [i18n]);

  return (
    <div className="bg-black text-white">
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default App;
