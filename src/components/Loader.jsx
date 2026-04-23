import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const textRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => onComplete?.(),
    });

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
    )
      .to(barRef.current, {
        width: "100%",
        duration: 0.8,
        ease: "power2.inOut",
      })
      .to(loaderRef.current, {
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
        ease: "power2.out",
      });
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]"
    >
      {/* TEXT */}
      <h1
        ref={textRef}
        className="text-white text-lg md:text-xl tracking-[0.3em] uppercase"
      >
        Code<span className="text-[#F16D34]">Werk</span>
      </h1>

      {/* orange loader */}
      <div className="mt-6 w-40 h-[1px] bg-white/10 overflow-hidden">
        <div ref={barRef} className="h-full w-0 bg-[#F16D34]" />
      </div>
    </div>
  );
};

export default Loader;
