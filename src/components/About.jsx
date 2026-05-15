import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import saraImg from "../images/sara.png";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const { t } = useTranslation();

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  const facts = [
    { label: t("about.fact1.label"), value: t("about.fact1.value") },
    { label: t("about.fact2.label"), value: t("about.fact2.value") },
    { label: t("about.fact3.label"), value: t("about.fact3.value") },
  ];

  return (
    <section className="min-h-screen px-6 md:px-16 py-12 md:py-20">
      <div className="max-w-5xl mx-auto">
        {/* About heading */}
        <div className="mb-10">
          <h2 className="font-['Poiret_One'] text-4xl md:text-6xl font-bold uppercase tracking-widest">
            {t("about.title")}
          </h2>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
        >
          {/* my photo */}
          <motion.div variants={item}>
            <div className="relative w-full max-w-xs aspect-[3/4] mx-auto md:mx-0">
              {/* offset border frame  */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-[#F16D34]/25 rounded-sm" />
              <img
                src={saraImg}
                alt="Sarangan"
                className="relative z-10 w-full h-full object-cover object-top rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          {/* right side about me */}
          <motion.div variants={item} className="flex flex-col gap-8 pt-2">
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              {t("about.philosophy")}
            </p>

            <p className="text-white/50 text-sm leading-relaxed">
              {t("about.approach")}
            </p>

            {/* Fact rows — for quick glance */}
            <div className="border-t border-white/10 pt-8 flex flex-col gap-5">
              {facts.map((fact, i) => (
                <div
                  key={i}
                  className="flex items-start justify-between gap-4 border-b border-white/5 pb-5 last:border-0 last:pb-0"
                >
                  <span className="text-white/50 text-xs uppercase tracking-[0.3em] pt-0.5">
                    {fact.label}
                  </span>
                  <span className="text-white/70 text-sm text-right">
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>

            {/* availability pill design */}
            <div className="flex gap-2 flex-wrap pt-2">
              <span className="text-[10px] uppercase tracking-widest px-3 py-1 border border-[#F16D34]/40 text-[#F16D34] rounded-full">
                {t("about.availability")}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
