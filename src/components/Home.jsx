import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [showAlt, setShowAlt] = useState(false);

  useEffect(() => {
    if (isInView && !showAlt) {
      const timer = setTimeout(() => setShowAlt(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [isInView, showAlt]);

  return (
    <div className="min-h-screen text-white flex items-center justify-center px-4">
      <div ref={ref} className="text-center ">
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Sarangan.
        </motion.h1>

        <div className="flex justify-center items-center gap-4 text-3xl md:text-5xl font-semibold leading-[1.2]">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            I’m a
          </motion.span>

          <div className="relative h-[1.2em] w-[200px] overflow-hidden text-left">
            <motion.span
              initial={{ y: showAlt ? 0 : 0, opacity: showAlt ? 0 : 1 }}
              animate={{
                y: showAlt ? "-100%" : "0%",
                opacity: showAlt ? 0 : 1,
              }}
              transition={{ duration: 0.6 }}
              className="absolute top-0 left-0 w-full"
              style={{ lineHeight: "1.2em" }}
            >
              Developer
            </motion.span>

            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: showAlt ? "0%" : "100%", opacity: showAlt ? 1 : 0 }}
              transition={{ duration: 0.6 }}
              className="absolute top-0 left-0 w-full text-teal-400"
              style={{ lineHeight: "1.2em" }}
            >
              Designer
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
