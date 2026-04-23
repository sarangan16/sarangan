import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaGithub } from "react-icons/fa";
import { useTranslation, Trans } from "react-i18next";

const Hero = ({ projectsRef }) => {
  const { t } = useTranslation();

  const nameRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [nameRef.current, textRef.current, buttonsRef.current],
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.15,
      },
    );
  }, []);

  return (
    <section className="min-h-screen flex items-center bg-black text-white px-6 md:px-16">
      <div className="max-w-6xl w-full mx-auto">
        {/* Name */}
        <h1
          ref={nameRef}
          className="text-[48px] sm:text-[64px] md:text-[96px] lg:text-[120px] font-extrabold leading-[0.9] tracking-tight"
        >
          Sarangan
        </h1>

        {/* my intro txt */}
        <p
          ref={textRef}
          className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-white/60 leading-relaxed"
        >
          <Trans
            i18nKey="introText"
            components={{
              strong: <span className="text-white font-medium" />,
              highlight: (
                <span className="underline decoration-white/30 decoration-2 underline-offset-4" />
              ),
            }}
          />
        </p>

        {/* action */}
        <div ref={buttonsRef} className="flex flex-wrap gap-4 mt-10">
          <button
            onClick={() =>
              projectsRef?.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-white/80 transition"
          >
            {t("viewProjects")}
          </button>

          <a
            href="https://github.com/sarangan16"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 border border-white/20 text-white rounded-full hover:border-white/60 transition"
          >
            <FaGithub className="mr-2" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
