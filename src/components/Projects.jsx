import React from "react";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Crown Chauffeur",
    descriptionKey: "CrownChauffeur.description",
    github: "https://github.com/sarangan16/chaffuerElite",
    image: "/images/crown.png",
    tech: ["React", "Node.js", "Express", "Zod", "GSAP", "Tailwind"],
  },
  {
    title: "GoldStack",
    descriptionKey: "GoldStack.description",
    github: "https://github.com/sarangan16/real-estate",
    image: "/images/goldstack.png",
    tech: ["React", "Framer Motion", "Tailwind", "Vite", "Toastify"],
  },
  {
    title: "KaufDE",
    descriptionKey: "KaufDE.description",
    github: "https://github.com/sarangan16/online-store",
    image: "/images/kaufde.png",
    tech: ["React", "Stripe", "GSAP", "EmailJS", "Express", "Router"],
  },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section className="px-6 md:px-16 py-32 bg-black text-white">
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Projects
        </h2>
        <p className="mt-4 text-white/50 max-w-xl">
          Full-stack development toolkit focused on performance, scalability,
          and modern UI systems.
        </p>
      </div>
      <div className="max-w-5xl mx-auto space-y-14">
        {projects.map((project, index) => (
          <div key={index} className="group border-b border-white/10 pb-10">
            {/* TITLE */}
            <div className="flex justify-between items-start">
              <h2 className="text-2xl md:text-4xl font-medium tracking-tight">
                {String(index + 1).padStart(2, "0")} — {t(project.title)}
              </h2>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[#F16D34] transition"
              >
                <FaGithub />
              </a>
            </div>

            {/* DESCRIPTION */}
            <p className="text-white/50 mt-3 max-w-xl leading-relaxed">
              {t(project.descriptionKey)}
            </p>

            {/* TECH STACK (NEW) */}
            <div className="flex flex-wrap gap-2 mt-4">
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
