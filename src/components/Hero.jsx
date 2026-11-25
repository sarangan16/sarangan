import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ease = [0.7, 0, 0.2, 1];

const fade = (delay) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.2, 0.7, 0.2, 1] },
});

const word = {
  in: { transition: { staggerChildren: 0.035 } },
  out: { transition: { staggerChildren: 0.025 } },
};
const char = {
  from: { y: "105%" },
  in: { y: "0%", transition: { duration: 0.6, ease } },
  out: { y: "-105%", transition: { duration: 0.45, ease } },
};

// entwickler -> gründer -> macher, letter by letter. tap to skip
const Roller = ({ words }) => {
  const [i, setI] = useState(0);
  const [width, setWidth] = useState(0);
  const sizer = useRef(null);
  const shown = useRef(false);
  const still = useReducedMotion();
  const current = words[i % words.length];

  useEffect(() => {
    if (still || words.length < 2) return;
    const id = setTimeout(() => setI((n) => n + 1), 2600);
    return () => clearTimeout(id);
  }, [i, still, words.length]);

  // box follows the word width so the dot after it slides along
  // resize observer catches the late font swap too
  useLayoutEffect(() => {
    const el = sizer.current;
    // + a bit, tight tracking lets the last letter hang over its box
    const measure = () => setWidth(el.offsetWidth + parseFloat(getComputedStyle(el).fontSize) * 0.05);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [current]);

  // first width snaps in, only word changes animate
  useEffect(() => {
    if (width) shown.current = true;
  }, [width]);

  return (
    <button
      type="button"
      onClick={() => setI((n) => n + 1)}
      aria-label={words.join(", ")}
      className="relative inline-flex items-start text-left"
    >
      {/* split same as the real one, kerning differs otherwise */}
      <span ref={sizer} aria-hidden="true" className="absolute invisible flex w-max whitespace-pre">
        {[...current].map((c, n) => (
          <span key={n} className="inline-block">{c}</span>
        ))}
      </span>
      <motion.span
        aria-hidden="true"
        className="relative block h-[1.15em] overflow-hidden"
        animate={{ width }}
        transition={{ duration: shown.current ? 0.6 : 0, ease }}
      >
        <AnimatePresence initial={false}>
          <motion.span
            key={i}
            className="absolute left-0 top-0 flex whitespace-pre"
            variants={word}
            initial="from"
            animate="in"
            exit="out"
          >
            {[...current].map((c, n) => (
              <motion.span key={n} variants={char} className="inline-block leading-[1.15em]">
                {c}
              </motion.span>
            ))}
          </motion.span>
        </AnimatePresence>
      </motion.span>
      <span className="leading-[1.15em] text-[#F16D34]">.</span>
    </button>
  );
};

const Hero = ({ projectsRef }) => {
  const { t } = useTranslation();
  const roles = t("hero.roles", { returnObjects: true });
  const words = Array.isArray(roles) ? roles : [t("hero.role")];

  return (
    <section className="min-h-[100svh] flex items-center px-6 md:px-16 pt-24 pb-12 text-white">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          {...fade(0.1)}
          className="flex items-center justify-between text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-white/45"
        >
          <span>
            {t("hero.location")} · DE
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F16D34] animate-pulse" />
            {t("hero.available")}
          </span>
        </motion.div>

        <motion.h1
          {...fade(0.2)}
          className="mt-8 md:mt-10 font-display font-bold uppercase leading-[0.85] whitespace-nowrap text-[clamp(52px,16.5vw,205px)] tracking-[-0.03em]"
        >
          Sarangan
        </motion.h1>

        <motion.div
          {...fade(0.4)}
          className="mt-3 md:mt-5 font-display font-light text-[clamp(30px,6.5vw,72px)] leading-none tracking-[-0.03em] text-white/90"
        >
          <Roller words={words} />
        </motion.div>

        <div className="mt-10 md:mt-16 pt-6 border-t border-white/10 grid md:grid-cols-12 gap-8 items-end">
          <motion.p
            {...fade(0.55)}
            className="md:col-span-6 lg:col-span-5 text-[13px] sm:text-sm leading-relaxed text-white/55"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            {...fade(0.7)}
            className="md:col-start-8 md:col-span-5 flex flex-wrap md:justify-end gap-x-8 gap-y-3 font-display text-base sm:text-lg"
          >
            <a
              href="https://zlockd.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 border-b border-white/20 text-white/70 hover:text-white hover:border-white pb-1 transition"
            >
              {t("hero.founderLine")} Zlockd
              <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
            </a>
            <a
              href="https://github.com/sarangan16"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 border-b border-white/20 text-white/70 hover:text-white hover:border-white pb-1 transition"
            >
              GitHub
              <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
            </a>
            <button
              onClick={() => projectsRef?.current?.scrollIntoView({ behavior: "smooth" })}
              className="group flex items-center gap-2 border-b border-[#F16D34] text-[#F16D34] pb-1 transition hover:text-white hover:border-white"
            >
              {t("hero.cta_projects")}
              <span className="transition-transform group-hover:translate-y-0.5">↓</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
