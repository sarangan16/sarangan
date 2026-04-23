import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setToggle(true), 2200);
      return () => clearTimeout(t);
    }
  }, [inView]);
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
    <section className="min-h-screen bg-black text-white flex items-center">
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
            Frontend Developer · UI Engineer · Freelance
          </motion.p>

          <motion.p
            variants={item}
            className="mt-8 text-white/50 max-w-xl text-sm sm:text-base leading-relaxed"
          >
            Frontend developer based in Germany, focused on building modern,
            responsive, and interactive web experiences. I also work freelance,
            helping startups and businesses turn concepts into clean,
            production-ready products.
          </motion.p>
        </motion.div>

        {/* small tabs for location available*/}
        <div className="mt-10 flex flex-wrap gap-3">
          {/* availability */}
          <div className="flex items-center gap-2 px-4 py-1 border border-white/10 rounded-full text-xs text-white/60">
            <span className="w-2 h-2 rounded-full  bg-green-500" />
            Available for work
          </div>

          {/* location */}
          <div className="px-4 py-1 border border-white/10 rounded-full text-xs text-white/50">
            Düsseldorf
          </div>

          {/* freelance */}
          <div className="px-4 py-1 border border-white/10 rounded-full text-xs text-white/50">
            Freelance
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
