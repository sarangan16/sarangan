import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import useLens from "./animations/useLens";

const tag = "text-[#F16D34]";
const attr = "text-[#f39a6c]";
const str = "text-[#f6c6a8]";

// the jsx shown under the lens
const Code = () => (
  <pre className="absolute inset-0 overflow-hidden font-mono text-[10px] sm:text-xs leading-relaxed text-white/50">
    <span className={tag}>{"<Hero>"}</span>
    {"\n  "}
    <span className={tag}>{"<h1"}</span> <span className={attr}>className</span>=
    <span className={str}>{'"font-display"'}</span>
    <span className={tag}>{">"}</span>Sarangan<span className={tag}>{"</h1>"}</span>
    {"\n  "}
    <span className={tag}>{"<Role"}</span> <span className={attr}>founder</span>=
    <span className={str}>{'"Zlockd"'}</span> <span className={tag}>{"/>"}</span>
    {"\n"}
    <span className={tag}>{"</Hero>"}</span>
  </pre>
);

const XrayBtn = ({ label, className, children }) => (
  <span
    className={`relative inline-block ${className} border border-dashed border-[#F16D34]/60 rounded-full text-[11px] uppercase tracking-[0.28em] text-transparent`}
  >
    {children}
    <span className="absolute inset-0 grid place-items-center font-mono text-[10px] normal-case tracking-normal text-[#F16D34] whitespace-nowrap">
      {label}
    </span>
  </span>
);

const Label = ({ children, className = "" }) => (
  <span
    className={`absolute bottom-1 font-mono text-[10px] uppercase tracking-wider text-[#F16D34] whitespace-nowrap ${className}`}
  >
    {children}
  </span>
);

const Guides = ({ g }) => (
  <>
    <div
      className="absolute inset-x-0 border-t border-dashed border-[#F16D34]/45"
      style={{ top: g.base - g.cap }}
    >
      <Label className="right-4 md:right-10">cap height · {Math.round(g.cap)}px</Label>
    </div>
    <div
      className="absolute inset-x-0 border-t border-dashed border-[#F16D34]/45"
      style={{ top: g.base }}
    >
      <Label className="right-4 md:right-10">baseline</Label>
    </div>
    <div
      className="absolute inset-y-0 border-l border-dashed border-[#F16D34]/45"
      style={{ left: g.left }}
    />
    <div
      className="absolute border-t border-[#F16D34]"
      style={{ left: g.left, width: g.width, top: g.base - g.cap - 22 }}
    >
      <span className="absolute left-0 -top-[5px] w-px h-[9px] bg-[#F16D34]" />
      <span className="absolute right-0 -top-[5px] w-px h-[9px] bg-[#F16D34]" />
      <Label className="left-1/2 -translate-x-1/2">
        space grotesk 700 · {Math.round(g.fs)}px · {Math.round(g.width)}px
      </Label>
    </div>
  </>
);

// same markup twice, normal + xray, so both layers line up
const HeroContent = ({ xray = false, inView, refs = {}, onProjects }) => {
  const { t } = useTranslation();
  const Div = xray ? "div" : motion.div;
  const H1 = xray ? "h1" : motion.h1;
  const P = xray ? "p" : motion.p;

  const fade = (delay) =>
    xray
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: inView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.6, delay },
        };

  return (
    <div className="max-w-5xl mx-auto px-6 md:px-16 w-full">
      <Div {...fade(0.1)} className="flex items-center gap-3 mb-4">
        <span className="block w-7 h-px bg-[#F16D34] opacity-60" />
        {xray ? (
          <span className="font-mono text-[11px] sm:text-sm leading-relaxed text-[#F16D34]">
            {"// section#hero · min-h-screen"}
          </span>
        ) : (
          <span className="font-display uppercase tracking-[0.15em] sm:tracking-[0.3em] text-[11px] sm:text-sm leading-relaxed text-white/65">
            DÜSSELDORF · BUILDING FOR THE WEB
          </span>
        )}
      </Div>

      <H1
        {...fade(0.2)}
        ref={refs.name}
        className={`text-[clamp(40px,13.5vw,52px)] sm:text-[clamp(52px,12vw,140px)] font-display uppercase font-bold leading-[0.9] tracking-[-0.02em] ${
          xray ? "text-transparent xray-stroke" : ""
        }`}
      >
        <span ref={refs.nameText}>
          Sarangan
          {!xray && <span ref={refs.baseline} className="inline-block w-0 h-0" />}
        </span>
      </H1>

      <P
        {...fade(0.3)}
        ref={refs.role}
        className={`relative w-fit mt-5 font-display text-[12px] sm:text-base uppercase tracking-[0.24em] ${
          xray
            ? "text-transparent outline-dashed outline-1 outline-offset-[6px] outline-[#F16D34]/60"
            : "text-white/80"
        }`}
      >
        {t("hero.role_line2")}{" "}
        <span className={xray ? "" : "text-[#F16D34]"}>·</span>{" "}
        {t("hero.founderLine")}{" "}
        {xray ? (
          "Zlockd"
        ) : (
          <a
            href="https://zlockd.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border-b border-white/30 hover:border-white pb-0.5 transition"
          >
            Zlockd
          </a>
        )}
        {xray && (
          <span className="absolute left-0 top-1/2 -translate-y-1/2 font-mono text-[10px] sm:text-[11px] normal-case tracking-normal text-[#F16D34] whitespace-nowrap">
            {'<Role founder="Zlockd" />'}
          </span>
        )}
      </P>

      <Div {...fade(0.4)} className="relative mt-5 max-w-lg">
        <p className={`text-sm leading-relaxed ${xray ? "text-transparent" : "text-white/60"}`}>
          {t("hero.description")}
        </p>
        {xray && <Code />}
      </Div>

      <Div {...fade(0.5)} className="mt-7 flex flex-wrap gap-3">
        {xray ? (
          <>
            <XrayBtn label="onClick → #projects" className="px-6 py-2">
              {t("hero.cta_projects")}
            </XrayBtn>
            <XrayBtn label="href ↗ github" className="px-5 py-2.5">
              GitHub
            </XrayBtn>
          </>
        ) : (
          <>
            <button
              ref={refs.cta}
              onClick={onProjects}
              className="px-6 py-2 bg-[#F16D34] border border-[#F16D34] rounded-full text-[11px] uppercase tracking-[0.28em] text-[#0a0a0a] hover:bg-transparent hover:text-[#F16D34] transition"
            >
              {t("hero.cta_projects")}
            </button>
            <a
              ref={refs.github}
              href="https://github.com/sarangan16"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-white/30 rounded-full text-[11px] uppercase tracking-[0.28em] text-white/60 hover:border-white/60 hover:text-white transition"
            >
              GitHub
            </a>
          </>
        )}
      </Div>
    </div>
  );
};

const Hero = ({ projectsRef }) => {
  const sectionRef = useRef(null);
  const clipRef = useRef(null);
  const edgeRef = useRef(null);
  const readRef = useRef(null);
  const refs = {
    name: useRef(null),
    nameText: useRef(null),
    baseline: useRef(null),
    role: useRef(null),
    cta: useRef(null),
    github: useRef(null),
  };
  const inView = useInView(sectionRef, { once: true });
  const [guides, setGuides] = useState(null);

  useLens({
    areaRef: sectionRef,
    clipRef,
    edgeRef,
    readRef,
    getTargets: () => [refs.name.current, refs.role.current, refs.cta.current, refs.github.current],
  });

  // guides come from the real font metrics
  useEffect(() => {
    const measure = () => {
      const sec = sectionRef.current;
      const h1 = refs.name.current;
      const text = refs.nameText.current;
      const bl = refs.baseline.current;
      if (!sec || !h1 || !text || !bl) return;

      const a = sec.getBoundingClientRect();
      const r = text.getBoundingClientRect();
      const fs = parseFloat(getComputedStyle(h1).fontSize);
      const ctx = document.createElement("canvas").getContext("2d");
      ctx.font = `700 ${fs}px "Space Grotesk"`;

      setGuides({
        fs,
        cap: ctx.measureText("H").actualBoundingBoxAscent,
        base: bl.getBoundingClientRect().top - a.top,
        left: r.left - a.left,
        width: r.width,
      });
    };

    // wait for fonts + the intro fade
    const timer = setTimeout(measure, 900);
    document.fonts?.ready.then(measure);
    const ro = new ResizeObserver(measure);
    ro.observe(sectionRef.current);
    return () => {
      clearTimeout(timer);
      ro.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center text-white overflow-hidden">
      <HeroContent
        inView={inView}
        refs={refs}
        onProjects={() => projectsRef?.current?.scrollIntoView({ behavior: "smooth" })}
      />

      <div
        ref={clipRef}
        aria-hidden="true"
        className="absolute inset-0 flex items-center bg-[#0c0c0d] pointer-events-none select-none"
        style={{ clipPath: "circle(0px at 50% 50%)" }}
      >
        <div className="absolute inset-0 xray-grid" />
        {guides && <Guides g={guides} />}
        <HeroContent xray />
        <div
          ref={readRef}
          className="absolute left-0 top-0 px-[7px] py-[5px] font-mono text-[10px] leading-none tracking-wide text-[#F16D34] bg-[#0c0c0d] border border-[#F16D34]/45 rounded whitespace-nowrap tabular-nums"
        />
      </div>

      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
        <polygon ref={edgeRef} fill="none" stroke="#F16D34" strokeWidth="1" opacity="0.9" />
      </svg>
    </section>
  );
};

export default Hero;
