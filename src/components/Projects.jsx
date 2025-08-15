import React from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaNode } from "react-icons/fa";
import { SiReact, SiTailwindcss, SiJavascript } from "react-icons/si";

const projects = [
  {
    title: "GoldStack",
    descriptionKey: "GoldStack.description",
    github: "https://github.com/sarangan16/real-estate",
    live: "https://real-estate-khaki-six.vercel.app/",
    technologies: [
      <SiReact />,
      <SiTailwindcss />,
      <SiJavascript />,
      <FaNode />,
    ],
  },
  {
    title: "KaufDE",
    descriptionKey: "KaufDE.description",
    github: "https://github.com/sarangan16/online-store",
    live: "https://online-store-eight-khaki.vercel.app/",
    technologies: [
      <SiReact />,
      <SiTailwindcss />,
      <SiJavascript />,
      <FaNode />,
    ],
  },

  {
    title: "Job Portal",
    descriptionKey: "Job Portal.description",
    github: "https://github.com/sarangan16/jobhunt",
    live: "https://jobhunt-pink.vercel.app/",
    technologies: [
      <SiReact />,
      <SiTailwindcss />,
      <SiJavascript />,
      <FaNode />,
    ],
  },
  {
    title: "Bürokratie",
    descriptionKey: "Bürokratie.description",
    github: "https://github.com/sarangan16/buro_DE",
    live: "https://buro-de.vercel.app/",
    technologies: [<SiReact />, <SiTailwindcss />, <FaNode />],
  },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section className="px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {t(project.title)}
                </h3>
                <hr />
                <p className="text-gray-600 mb-4 mt-2">
                  {t(project.descriptionKey)}
                </p>
              </div>

              <div className="flex gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black text-xl"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  {t("live")}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
