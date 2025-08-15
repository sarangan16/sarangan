import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaNodeJs,
  FaBootstrap,
  FaSass,
} from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiVite, SiFramer } from "react-icons/si";

const techStack = [
  { name: "React", icon: <FaReact style={{ fill: "#0ea5e9" }} /> },
  { name: "Tailwind", icon: <SiTailwindcss style={{ fill: "#06b6d4" }} /> },
  { name: "JavaScript", icon: <SiJavascript style={{ fill: "#fbbf24" }} /> },
  { name: "HTML5", icon: <FaHtml5 style={{ fill: "#fb923c" }} /> },
  { name: "CSS3", icon: <FaCss3Alt style={{ fill: "#2563eb" }} /> },
  { name: "Vite", icon: <SiVite style={{ fill: "#8b5cf6" }} /> },
  { name: "Node.js", icon: <FaNodeJs style={{ fill: "#16a34a" }} /> },
  { name: "Bootstrap", icon: <FaBootstrap style={{ fill: "#7952b3" }} /> },
  { name: "Sass", icon: <FaSass style={{ fill: "#c69" }} /> },
  { name: "Framer", icon: <SiFramer style={{ fill: "#FFD700" }} /> },
  {
    name: "GitHub",
    icon: <FaGithub style={{ fill: "#2d3436" }} />,
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
