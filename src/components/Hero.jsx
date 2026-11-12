import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Rolls the orange line through each role (Developer → Founder → Builder).
const RollingRole = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [instant, setInstant] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || words.length < 2) return;
    const id = setInterval(() => {
      setInstant(false);
      setIndex((i) => i + 1);
    }, 2200);
    return () => clearInterval(id);
  }, [reduceMotion, words.length]);

  // The first word is repeated at the end so the roll loops seamlessly.
  // Each row is 1.2em tall so umlauts (GRÜNDER) aren't clipped or seen early.
  const list = [...words, words[0]];

  return (
    <span
      className="inline-block h-[1.2em] -my-[0.15em] overflow-hidden align-top"
      aria-label={words.join(", ")}
    >
      <motion.span
        className="flex flex-col"
        animate={{ y: `${-index * 1.2}em` }}
        transition={
          instant ? { duration: 0 } : { duration: 0.7, ease: [0.7, 0, 0.2, 1] }
        }
        onAnimationComplete={() => {
          if (index === words.length) {
            setInstant(true);
            setIndex(0);
          }
        }}
      >
        {list.map((word, i) => (
          <span key={i} aria-hidden="true" className="block h-[1.2em] leading-[1.2]">
            {word}
          </span>
        ))}
      </motion.span>
    </span>
  );
};

const Hero = ({ projectsRef }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const { t, i18n } = useTranslation();
  const roles = t("hero.roles", { returnObjects: true });
  const roleWords = Array.isArray(roles) ? roles : [t("hero.role_line2")];

  return (
    <section className="min-h-screen flex items-center text-white">
      <div ref={ref} className="max-w-5xl mx-auto px-6 md:px-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="block w-7 h-px bg-[#F16D34] opacity-60" />
          <span className="font-['Poiret_One'] uppercase tracking-[0.35em] text-white/65">
            DÜSSELDORF · BUILDING FOR THE WEB
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[clamp(40px,13.5vw,52px)] sm:text-[clamp(52px,10vw,110px)] font-['Poiret_One'] uppercase font-extrabold letter-spa leading-[0.90] tracking-widest"
          style={{}}
        >
          Sarangan
          <br />
          <span className="text-[#F16D34]">
            <RollingRole key={i18n.language} words={roleWords} />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-5 text-[13px] uppercase tracking-[0.35em] text-white/50"
        >
          {t("hero.founderLine")}{" "}
          <a
            href="https://zlockd.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/90 border-b border-white/30 hover:text-white hover:border-white pb-0.5 transition"
          >
            Zlockd
          </a>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-5 text-white/60 max-w-lg text-sm leading-relaxed"
        >
          {t("hero.description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-7 flex flex-wrap gap-3"
        >
          <button
            onClick={() =>
              projectsRef?.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-2 bg-[#F16D34] border border-[#F16D34] rounded-full text-[11px] uppercase tracking-[0.28em] text-white/70 hover:bg-transparent hover:text-[#F16D34] transition"
          >
            {t("hero.cta_projects")}
          </button>

          <a
            href="https://github.com/sarangan16"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-white/30 rounded-full text-[11px] uppercase tracking-[0.28em] text-white/50 hover:border-white/30 hover:text-white/60 transitionn"
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
