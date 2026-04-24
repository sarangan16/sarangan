import React from "react";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    titleKey: "CrownChauffeur",
    descriptionKey: "CrownChauffeur.description",
    github: "https://github.com/sarangan16/chaffuerElite",
    live: "https://chaffuer-elite.vercel.app/",
    tech: ["React", "Node.js", "Express", "Zod", "GSAP", "Tailwind"],
  },
  {
    titleKey: "GoldStack",
    descriptionKey: "GoldStack.description",
    github: "https://github.com/sarangan16/real-estate",
    live: "https://real-estate-khaki-six.vercel.app/",
    tech: ["React", "Framer Motion", "Tailwind", "Vite", "Toastify"],
  },
  {
    titleKey: "KaufDE",
    descriptionKey: "KaufDE.description",
    github: "https://github.com/sarangan16/online-store",
    live: "https://kaufde.vercel.app/",
    tech: ["React", "Stripe", "GSAP", "EmailJS", "Express", "Router"],
  },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section className="px-6 md:px-16 py-20 md:py-32 ">
      {/* h1 title */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
          {t("projecth2")}
        </h2>
      </div>

      {/* project list  */}
      <div className="max-w-5xl mx-auto space-y-16">
        {projects.map((project, index) => (
          <div key={index} className="group border-b border-white/10 pb-12">
            {/* title row */}
            <div className="flex justify-between items-start">
              <h3 className="text-lg md:text-2xl font-medium tracking-tight text-white/90 flex items-center">
                {/* project number */}
                <span className="text-[#F16D34] text-xl mr-3">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* title */}
                {t(project.titleKey)}
              </h3>

              {/* action buttons for project */}
              <div className="flex items-center gap-6">
                {/* live link */}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
        text-xs md:text-sm uppercase tracking-[0.2em]
        text-white/60
        hover:text-[#F16D34]
        transition
      "
                  >
                    Live
                  </a>
                )}

                {/* separator */}
                {project.live && <span className="text-white/10">/</span>}

                {/* github Btn */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
      flex items-center gap-2
      text-xs md:text-sm uppercase tracking-[0.2em]
      text-white/60
      hover:text-[#F16D34]
      transition
    "
                >
                  <FaGithub size={16} />
                  Code
                </a>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="text-white/50 mt-4 max-w-xl text-sm md:text-base leading-relaxed">
              {t(project.descriptionKey)}
            </p>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-2 mt-5">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="
                    text-[10px] uppercase tracking-widest
                    px-3 py-1
                    border border-white/10
                    text-white/50
                    rounded-full
                    hover:border-[#F16D34]
                    hover:text-white
                    transition
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
