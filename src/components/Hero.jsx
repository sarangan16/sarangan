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

const Hero = () => {
  const { t, i18n } = useTranslation();

  gsap.registerPlugin(ScrollTrigger);

  const techStackRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const stackSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const leftBlockRef = useRef(null);
  const imgRef = useRef(null);

  const [leftContent, setLeftContent] = useState("default");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      techStackRef.current,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: techStackRef.current,
          start: "top center",
          toggleActions: "play none none reverse",
          scroller: scrollContainerRef.current,
        },
      }
    );
    gsap.from(imgRef.current, {
      rotation: 0,
      duration: 6,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
      transformOrigin: "50% 50%",
    });

    ScrollTrigger.create({
      trigger: stackSectionRef.current,
      start: "top center",
      end: "bottom center",
      scroller: scrollContainerRef.current,
      onEnter: () => setLeftContent("stack"),
      onLeaveBack: () => setLeftContent("default"),
    });

    ScrollTrigger.create({
      trigger: projectsSectionRef.current,
      start: "top center",
      end: "bottom center",
      scroller: scrollContainerRef.current,
      onEnter: () => setLeftContent("projects"),
      onLeaveBack: () => setLeftContent("stack"),
    });

    ScrollTrigger.create({
      trigger: contactSectionRef.current,
      start: "top center",
      end: "bottom center",
      scroller: scrollContainerRef.current,
      onEnter: () => setLeftContent("contact"),
      onLeaveBack: () => setLeftContent("projects"),
    });
  }, []);

  useEffect(() => {
    if (!leftBlockRef.current) return;

    gsap.fromTo(
      leftBlockRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power1.out" }
    );
  }, [leftContent]);

  return (
    <div className="h-screen overflow-hidden">
      <section className="h-full flex my-8">
        <div className="hidden sm:flex w-1/3 items-center justify-center">
          <section>
            <div className="sticky top-0" ref={leftBlockRef}>
              {leftContent === "default" && (
                <>
                  <img
                    ref={imgRef}
                    src={myImage}
                    alt="Sarangan profile"
                    className="w-48 h-48 object-cover shadow-lg border-4 border-gray-200 mt-10"
                  />
                  <h1 className="text-3xl sm:text-xl font-extrabold text-center leading-tight mt-5">
                    SARANGAN
                  </h1>
                  <p className="text-center">Düsseldorf, Germany</p>
                  <div className="flex justify-center gap-4 mt-3">
                    <a
                      href="https://github.com/sarangan16"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-gray-600"
                    >
                      <FaGithub size={24} />
                    </a>
                  </div>
                </>
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
          className="w-full md:w-2/3 overflow-y-auto px-6 hide-scrollbar pb-20"
          style={{ paddingTop: "14rem" }}
          ref={scrollContainerRef}
        >
          <div className="max-w-xl mx-auto md:text-left flex flex-col justify-start h-full mb-20 ">
            <p className="mt-0 mb-6 text-4xl text-gray-600 ">
              {t("saranganIntro")}{" "}
              <span
                className="inline-block align-baseline"
                style={{ width: "7.5ch" }}
              >
                <RotatingText
                  texts={["WebApps", "Websites", "UI & UX"]}
                  mainClassName="inline-block text-3xl px-1 rounded"
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </span>{" "}
              {t("saranganIntro2")}
            </p>

            <div
              ref={(el) => {
                techStackRef.current = el;
                stackSectionRef.current = el;
              }}
              className="mt-3"
              style={{ paddingTop: "15rem" }}
            >
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

            <div ref={projectsSectionRef}>
              <Projects />
            </div>
            <div ref={contactSectionRef} style={{ paddingTop: "10rem" }}>
              <Contact />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
