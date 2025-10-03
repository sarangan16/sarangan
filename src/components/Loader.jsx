import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    const letters = text.innerText.split("");
    text.innerHTML = letters
      .map((l) => `<span class="inline-block opacity-0">${l}</span>`)
      .join("");

    const spans = text.querySelectorAll("span");

    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    tl.to(spans, {
      opacity: 1,
      y: 0,
      stagger: 0.06,
      duration: 0.5,
      ease: "back.out(1.7)",
    })
      .to(spans, {
        scale: 1.2,
        color: "#ff6633",
        stagger: 0.03,
        duration: 0.3,
        yoyo: true,
        repeat: 1,
      })
      .to(spans, {
        opacity: 0,
        y: -30,
        stagger: 0.04,
        duration: 0.5,
        ease: "power2.in",
      })
      .to(loaderRef.current, {
        height: "4rem",
        top: 0,
        y: 0,
        backgroundColor: "#111827",
        borderRadius: 0,
        duration: 1,
        ease: "power4.inOut",
      })
      .to(
        textRef.current,
        {
          opacity: 1,
          scale: 1,
          color: "#fff",
          fontSize: "1.25rem",
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.8"
      );
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed top-0 left-0 w-full h-screen bg-black flex items-center justify-center z-[9999] overflow-hidden"
    >
      <h1
        ref={textRef}
        className="text-3xl md:text-4xl font-bold tracking-wider text-white"
      >
        Loading &lt;Portfolio /&gt;
      </h1>
    </div>
  );
};

export default Loader;
