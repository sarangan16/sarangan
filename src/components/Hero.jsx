import React, { useEffect, useRef, useState } from "react";
import myImage from "../images/sara.png";
import RotatingText from "./animations/RotatingText";
import TechStack from "./Techstack";
import ScrollReveal from "./animations/ScrollReveal";
import Projects from "./Projects";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub } from "react-icons/fa";
import Contact from "./Contact";
import { useTranslation } from "react-i18next";
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
  const introExtraSectionRef = useRef(null);
  const topSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);

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
    const aboutSection = introExtraSectionRef.current;
    const words = aboutSectionRef.current?.querySelectorAll(".word");

    if (!words || !container) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutSectionRef.current,
        scroller: container,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    tl.fromTo(
      words,
      {
        y: 20,
        opacity: 0,
        scale: 0.8,
        color: "#888",
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.05,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      [introHeadingRef.current, introTextRef.current, buttonGroupRef.current],
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out", stagger: 0.2 }
    );

    if (profile && container && aboutSection && stackSectionRef.current) {
      gsap.set(profile, { opacity: 1, scale: 1, y: 0, rotate: 0 });

      const tlProfile = gsap.timeline({
        scrollTrigger: {
          trigger: aboutSectionRef.current,
          scroller: container,
          start: "top top",
          end: () => stackSectionRef.current.offsetTop - 50,
          scrub: true,
          invalidateOnRefresh: true,
          toggleActions: "play reverse play reverse",
        },
      });

      tlProfile.to(profile, {
        y: -150,
        scale: 0.7,
        opacity: 0,
        rotate: 10,
        ease: "power2.out",
      });
    }

    const sections = [
      { ref: stackSectionRef, content: "stack" },
      { ref: projectsSectionRef, content: "projects" },
      { ref: contactSectionRef, content: "contact" },
    ];

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
        aboutRef={aboutSectionRef}
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
              className="max-w-4xl mx-auto h-screen flex flex-col justify-center px-6 md:px-0 space-y-6"
            >
              <h2
                ref={introHeadingRef}
                className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-[0.2em] uppercase text-gray-800"
              >
                Frontend Developer
              </h2>

              <p
                ref={introTextRef}
                className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed italic font-light"
              >
                Crafting{" "}
                <span className="font-semibold text-gray-900">
                  modern, responsive
                </span>{" "}
                and interactive{" "}
                <span className="underline decoration-[#ff6633]/50 decoration-2 underline-offset-4">
                  user experiences
                </span>
                .
              </p>

              <div ref={buttonGroupRef} className="flex space-x-3 mt-4">
                <button
                  onClick={scrollToProjects}
                  className="px-4 py-2 text-sm bg-[#ff6633] text-white font-medium rounded-lg shadow hover:bg-[#ff9966] transition"
                >
                  Projects
                </button>

                <a
                  href="https://github.com/sarangan16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 text-sm bg-gray-800 text-white font-medium rounded-lg shadow hover:bg-gray-700 transition"
                >
                  <FaGithub className="mr-1 text-base" />
                  Github Repo
                </a>
              </div>
            </div>

            <div
              ref={introExtraSectionRef}
              className="mt-screen py-20"
              style={{ paddingTop: "10rem" }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6 relative inline-block">
                <span className="absolute left-0 bottom-0 w-16 h-1 bg-[#ff6633] rounded-full"></span>
              </h2>

              <p
                ref={aboutSectionRef}
                className="text-gray-400 max-w-lg text-4xl"
              >
                {t("aboutText")
                  .match(/[\wÄÖÜäöüß]+|[.,!?;:]+|\s+/g)
                  .map((part, i) => (
                    <span
                      key={i}
                      className={`word relative inline-block ${
                        part.trim() ? "mr-[0.25em]" : ""
                      }`}
                    >
                      {part}
                    </span>
                  ))}
              </p>

              <div
                ref={(el) => {
                  techStackRef.current = el;
                  stackSectionRef.current = el;
                }}
                className="mt-3"
                style={{ paddingTop: "15rem" }}
              >
                <h1 className="block md:hidden text-2xl font-bold text-center sm:text-xl leading-tight mt-6">
                  Tech Stack
                </h1>
                <TechStack />
              </div>

              <div
                className="flex flex-col justify-center"
                style={{ paddingTop: "15rem" }}
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
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
