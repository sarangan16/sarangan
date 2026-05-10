import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// it changes the right side nav section indication. so far only visible to big screens.

const sections = [
  { id: "hero", label: "Scroll" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
];

const SectionIndicator = ({
  heroRef,
  aboutRef,
  projectsRef,
  stackRef,
  contactRef,
}) => {
  const [active, setActive] = useState("hero");

  const refs = {
    hero: heroRef,
    about: aboutRef,
    projects: projectsRef,
    stack: stackRef,
    contact: contactRef,
  };

  useEffect(() => {
    const observers = sections.map(({ id }) => {
      const ref = refs[id];
      if (!ref?.current) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.3 },
      );

      observer.observe(ref.current);
      return observer;
    });

    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const currentLabel = sections.find((s) => s.id === active)?.label ?? "";

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-4">
      {/*  top line */}
      <div className="w-[1px] h-12 bg-white/10" />

      {/* label */}
      <AnimatePresence mode="wait">
        <motion.span
          key={active}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          className="text-[10px] uppercase tracking-[0.35em] text-[#F16D34]"
        >
          {currentLabel}
        </motion.span>
      </AnimatePresence>

      {/* bottom line  */}
      <div className="w-[1px] h-12 bg-white/10" />
    </div>
  );
};

export default SectionIndicator;
