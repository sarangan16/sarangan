import React, { useRef } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/Techstack";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import About from "./components/About";
import "./components/i18n";
import SectionIndicator from "./components/animations/SectionIndicator";

function App() {
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const stackRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <div className="bg-[#0a0a0a] text-white">
      <Navbar
        heroRef={heroRef}
        projectsRef={projectsRef}
        stackRef={stackRef}
        contactRef={contactRef}
        aboutRef={aboutRef}
      />
      <SectionIndicator
        heroRef={heroRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        stackRef={stackRef}
        contactRef={contactRef}
      />

      <main>
        {/* hero */}
        <section ref={heroRef}>
          <Hero projectsRef={projectsRef} />
        </section>

        {/*about */}
        <section ref={aboutRef}>
          <About />
        </section>
        {/* projects */}
        <section ref={projectsRef}>
          <Projects />
        </section>

        {/* stack */}
        <section ref={stackRef}>
          <TechStack />
        </section>

        {/* contact */}
        <section ref={contactRef}>
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
