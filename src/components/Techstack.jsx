import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiVite } from "react-icons/si";

const techStack = [
  { name: "React", icon: <FaReact className="text-sky-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "Vite", icon: <SiVite className="text-purple-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-orange-600" /> },
  {
    name: "GitHub",
    icon: <FaGithub className="text-gray-800 dark:text-white" />,
  },
];

const TechStack = () => {
  return (
    <section className="">
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-gray-700 hover:scale-110 transition-transform duration-200 tech-item p-4 rounded shadow-md"
            >
              <div className="text-2xl mb-2">{tech.icon}</div>
              <span className="text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
