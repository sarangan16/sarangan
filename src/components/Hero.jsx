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

  const techStackRef = useRef(null);
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

  const [leftContent, setLeftContent] = useState("default");

  const scrollToProjects = () => {
    if (projectsSectionRef.current && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: projectsSectionRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const profile = imgRef.current;
    const container = scrollContainerRef.current;

    // Hero text animation
    gsap.fromTo(
      [introHeadingRef.current, introTextRef.current, buttonGroupRef.current],
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out", stagger: 0.2 }
    );

    // Profile picture fade out/in tied to scroll
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
            scrub: true, // ties animation to scroll progress
          },
        }
      );
    }

    const sections = [
      { ref: stackSectionRef, content: "stack" },
      { ref: projectsSectionRef, content: "projects" },
      { ref: contactSectionRef, content: "contact" },
    ];

    // Left content animation
    sections.forEach(({ ref, content }, i) => {
      const sectionEl = ref.current;

      ScrollTrigger.create({
        trigger: sectionEl,
        scroller: container,
        start: "top center",
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
        <section className="h-full flex my-8 max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">
          <div className="hidden sm:flex w-1/4 md:w-1/3 lg:w-1/3 xl:w-1/4 items-center justify-center">
            <section>
              <div className="sticky top-0" ref={leftBlockRef}>
                {leftContent === "default" && (
                  <img
                    ref={imgRef}
                    src={myImage}
                    alt="Sarangan profile"
                    className="w-72 h-80 object-cover shadow-2xl border-4 border-white"
                    style={{
                      clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                    }}
                  />
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

          <div
            className="right-content w-full sm:w-3/4 md:w-2/3 lg:w-2/3 xl:w-3/4 overflow-y-auto px-6 hide-scrollbar pb-20"
            ref={scrollContainerRef}
          >
            <div
              ref={topSectionRef}
              className="max-w-5xl mx-auto h-screen flex flex-col justify-center items-start px-6 md:px-0 space-y-8"
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
                  onClick={scrollToProjects}
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

            <div
              ref={(el) => {
                techStackRef.current = el;
                stackSectionRef.current = el;
              }}
              style={{ paddingTop: "10rem" }}
            >
              <h1 className="block md:hidden text-2xl font-bold text-center sm:text-xl leading-tight mt-2 mb-5">
                Tech Stack
              </h1>
              <TechStack />
            </div>

            <div
              className="flex flex-col justify-center"
              style={{ paddingTop: "10rem" }}
            >
              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={5}
                blurStrength={10}
              />
            </div>

            <div ref={projectsSectionRef} style={{ paddingTop: "10rem" }}>
              <h1 className="block md:hidden text-2xl font-bold text-center sm:text-xl leading-tight mt-2 mb-5">
                Projects
              </h1>
              <Projects />
            </div>

            <div ref={contactSectionRef} style={{ paddingTop: "8rem" }}>
              <h1 className="block md:hidden text-2xl font-bold text-center sm:text-xl leading-tight mt-2 mb-5">
                Contact
              </h1>
              <Contact />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
