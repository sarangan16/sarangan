import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = ({ projectsRef }) => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const { t } = useTranslation();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen text-white flex items-start md:items-center pt-28 md:pt-0">
      <div
        ref={ref}
        className="max-w-5xl mx-auto px-6 md:px-16 w-full flex flex-col justify-center"
      >
        {/* my name */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.h1
            variants={item}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tight"
          >
            SARANGAN
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-white/40 text-xs sm:text-sm uppercase tracking-[0.3em]"
          >
            {t("hero.role")} <span className="text-white/20">·</span>{" "}
            {t("hero.freelance")} <span className="text-white/20">·</span>{" "}
            <span className="inline-flex items-center gap-1">
              <MapPin size={12} className="text-white/30" />
              {t("hero.location")}
            </span>
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 text-white/50 max-w-xl text-sm sm:text-base leading-relaxed"
          >
            {t("hero.description")}
          </motion.p>
        </motion.div>

        <div className="mt-6 flex flex-wrap gap-3">
          {/* Projects */}
          <button
            onClick={() =>
              projectsRef?.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="
      px-5 py-2
      border border-[#F16D34]/40
      rounded-full
      text-xs uppercase tracking-[0.3em]
      text-[#F16D34]
      hover:bg-[#F16D34]
      hover:text-black
      transition
    "
          >
            Projects
          </button>

          {/* GitHub */}
          <a
            href="https://github.com/sarangan16"
            target="_blank"
            rel="noopener noreferrer"
            className="
      px-5 py-2
      border border-white/10
      rounded-full
      text-xs uppercase tracking-[0.3em]
      text-white/70
      hover:border-[#F16D34]
      hover:text-[#F16D34]
      transition
    "
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
