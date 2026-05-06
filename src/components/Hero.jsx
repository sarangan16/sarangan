import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

const Hero = ({ projectsRef }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const { t } = useTranslation();

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
            SARANGAN SIVAMOORTHY
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[clamp(52px,10vw,110px)] font-['Poiret_One'] uppercase font-extrabold letter-spa leading-[0.90] tracking-widest"
          style={{}}
        >
          {t("hero.role_line1")}
          <br />
          <span className="text-[#F16D34]">{t("hero.role_line2")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-5 text-[13px] uppercase tracking-[0.35em] text-white/20"
          style={{}}
        ></motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-5 text-white/40 max-w-lg text-sm leading-relaxed"
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
            className="px-5 py-2.5 border border-[#F16D34]/40 rounded-full text-[11px] uppercase tracking-[0.28em] text-[#F16D34] hover:bg-[#F16D34] hover:text-black transition"
          >
            {t("hero.cta_projects")}
          </button>

          <a
            href="https://github.com/sarangan16"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-white/10 rounded-full text-[11px] uppercase tracking-[0.28em] text-white/50 hover:border-[#F16D34] hover:text-[#F16D34] transition"
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
