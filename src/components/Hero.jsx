import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";

// developer -> founder -> builder
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

  // first word again at the end so the loop doesn't jump
  // rows are 1.3em but the box is 1em, otherwise the Ü dots from the next word peek in
  const list = [...words, words[0]];

  return (
    <span
      className="block h-[1em] mt-[0.06em] mb-[0.02em] overflow-hidden text-[#F16D34]"
      aria-label={words.join(", ")}
    >
      <motion.span
        className="block"
        animate={{ y: `${-index * 1.3}em` }}
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
          <span
            key={i}
            aria-hidden="true"
            className="block h-[1.3em] pt-[0.07em] leading-[1em] whitespace-nowrap"
          >
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
          <RollingRole key={i18n.language} words={roleWords} />
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
