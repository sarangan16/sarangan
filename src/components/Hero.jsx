import React, { useEffect, useRef, useState } from "react";
import myImage from "../images/sara.png";
import TechStack from "./Techstack";
import ScrollReveal from "./animations/ScrollReveal";
import Projects from "./Projects";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub } from "react-icons/fa";
import Contact from "./Contact";
import { useTranslation, Trans } from "react-i18next";
import Navbar from "./Navbar";

const Hero = () => {
  const { t } = useTranslation();
  gsap.registerPlugin(ScrollTrigger);

  const scrollContainerRef = useRef(null);
  const stackSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const leftBlockRef = useRef(null);
  const imgRef = useRef(null);
  const topSectionRef = useRef(null);

  const introHeadingRef = useRef(null);
  const introTextRef = useRef(null);
  const buttonGroupRef = useRef(null);

  const flipContainerRef = useRef(null);
  const flipped = useRef(false);

  const [leftContent, setLeftContent] = useState("default");

  // Scroll to section with navbar offset
  const scrollToSection = (sectionRef) => {
    if (sectionRef.current && scrollContainerRef.current) {
      const navbarHeight = 64; // h-16
      const top = sectionRef.current.offsetTop - navbarHeight;
      scrollContainerRef.current.scrollTo({ top, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const profile = imgRef.current;
    const container = scrollContainerRef.current;

    // Hero intro animation
    gsap.fromTo(
      [introHeadingRef.current, introTextRef.current, buttonGroupRef.current],
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out", stagger: 0.2 }
    );

    // Profile animation on scroll
    if (profile && container) {
      gsap.fromTo(
        profile,
        { opacity: 1, y: 0, scale: 1 },
        {
          opacity: 0,
          y: -50,
          scale: 0.9,
          ease: "none",
          scrollTrigger: {
            scroller: container,
            trigger: topSectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }

    // Sections in the order they appear in DOM
    const sections = [
      { ref: projectsSectionRef, content: "projects" },
      { ref: stackSectionRef, content: "stack" },
      { ref: contactSectionRef, content: "contact" },
    ];

    sections.forEach(({ ref, content }, i) => {
      const sectionEl = ref.current;

      ScrollTrigger.create({
        trigger: sectionEl,
        scroller: container,
        start: "top 40%", // triggers when section is visible
        end: "bottom center",
        onEnter: () => setLeftContent(content),
        onLeaveBack: () =>
          setLeftContent(i === 0 ? "default" : sections[i - 1].content),
      });

      gsap.fromTo(
        sectionEl,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionEl,
            scroller: container,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <Navbar
        scrollContainerRef={scrollContainerRef}
        introRef={topSectionRef}
        stackRef={stackSectionRef}
        projectsRef={projectsSectionRef}
        contactRef={contactSectionRef}
      />

      <div className="h-screen overflow-hidden pt-10">
        <section className="h-full flex my-8 max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 gap-x-8">
          {/* LEFT SIDE */}
          <div className="hidden sm:flex w-1/3 md:w-2/5 lg:w-2/5 xl:w-1/3 items-center justify-center">
            <section>
              <div className="sticky top-0" ref={leftBlockRef}>
                {leftContent === "default" && (
                  <div
                    ref={flipContainerRef}
                    className="w-64 h-72 cursor-pointer"
                    onClick={() => {
                      if (!flipContainerRef.current) return;
                      gsap.to(flipContainerRef.current, {
                        rotationY: flipped.current ? 0 : 180,
                        duration: 1,
                        ease: "power2.inOut",
                        transformPerspective: 1000,
                      });
                      flipped.current = !flipped.current;
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                      transform: "rotateY(0deg)",
                      perspective: "1000px",
                    }}
                  >
                    <img
                      ref={imgRef}
                      src={myImage}
                      alt="Sarangan profile"
                      className="w-full h-full object-cover shadow-2xl border-4 border-white backface-hidden"
                      style={{
                        clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                      }}
                    />
                  </div>
                )}

                {leftContent === "stack" && (
                  <h2 className="text-4xl font-bold text-center">
                    {t("stackh2")}
                  </h2>
                )}

                {leftContent === "projects" && (
                  <h2 className="text-4xl font-bold text-center">
                    {t("projecth2")}
                  </h2>
                )}

                {leftContent === "contact" && (
                  <h2 className="text-4xl font-bold text-center">
                    {t("contacth2")}
                  </h2>
                )}
              </div>
            </section>
          </div>

          {/* RIGHT SIDE */}
          <div
            className="right-content w-full sm:w-3/4 md:w-2/3 lg:w-2/3 xl:w-3/4 overflow-y-auto hide-scrollbar pb-20"
            ref={scrollContainerRef}
          >
            <div className="max-w-5xl ml-auto mr-0 px-6 md:px-0">
              {/* HERO INTRO */}
              <div
                ref={topSectionRef}
                className="h-screen flex flex-col justify-center items-start space-y-8"
              >
                <h1
                  ref={introHeadingRef}
                  className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight"
                >
                  <Trans
                    i18nKey="introHeading"
                    components={{
                      bold: (
                        <span className="bg-gradient-to-r from-[#ff6633] to-[#ff9966] bg-clip-text text-transparent" />
                      ),
                    }}
                  />
                </h1>

                <p
                  ref={introTextRef}
                  className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed font-light"
                >
                  <Trans
                    i18nKey="introText"
                    components={{
                      strong: <span className="font-semibold text-gray-900" />,
                      highlight: (
                        <span className="underline decoration-[#ff6633]/50 decoration-4 underline-offset-4" />
                      ),
                    }}
                  />
                </p>

                <div ref={buttonGroupRef} className="flex space-x-4 mt-6">
                  <button
                    onClick={() => scrollToSection(projectsSectionRef)}
                    className="px-6 py-3 text-base bg-[#ff6633] text-white font-semibold rounded-full shadow-lg hover:bg-[#ff9966] hover:shadow-xl transition-all duration-300"
                  >
                    {t("viewProjects")}
                  </button>

                  <a
                    href="https://github.com/sarangan16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 text-base bg-gray-900 text-white font-semibold rounded-full shadow-lg hover:bg-gray-800 hover:shadow-xl transition-all duration-300"
                  >
                    <FaGithub className="mr-2 text-lg" />
                    {t("githubRepo")}
                  </a>
                </div>
              </div>

              {/* ANIMATED DIVIDER */}
              <div className="flex flex-col justify-center">
                <ScrollReveal
                  baseOpacity={0}
                  enableBlur={true}
                  baseRotation={5}
                  blurStrength={10}
                />
              </div>

              {/* PROJECTS */}
              <div
                ref={projectsSectionRef}
                className="min-h-screen flex flex-col justify-center py-20"
              >
                <Projects />
              </div>

              {/* TECH STACK */}
              <div
                ref={stackSectionRef}
                className="min-h-screen flex flex-col justify-center py-20"
              >
                <TechStack />
              </div>

              {/* CONTACT */}
              <div
                ref={contactSectionRef}
                className="min-h-screen flex flex-col justify-center py-20"
              >
                <Contact />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
