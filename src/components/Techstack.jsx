import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaBootstrap,
  FaSass,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiVite,
  SiFramer,
  SiRedux,
  SiWebpack,
  SiJest,
  SiStorybook,
  SiFigma,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

const techCategories = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: <FaReact style={{ fill: "#0ea5e9" }} /> },
      {
        name: "JavaScript",
        icon: <SiJavascript style={{ fill: "#fbbf24" }} />,
      },
      { name: "HTML5", icon: <FaHtml5 style={{ fill: "#fb923c" }} /> },
      { name: "CSS3", icon: <FaCss3Alt style={{ fill: "#2563eb" }} /> },
      { name: "Tailwind", icon: <SiTailwindcss style={{ fill: "#06b6d4" }} /> },
      { name: "Bootstrap", icon: <FaBootstrap style={{ fill: "#7952b3" }} /> },
      { name: "Sass", icon: <FaSass style={{ fill: "#c69" }} /> },
    ],
  },
  {
    title: "UI & Animation",
    items: [
      { name: "Framer Motion", icon: <SiFramer style={{ fill: "#FFD700" }} /> },
      { name: "Storybook", icon: <SiStorybook style={{ fill: "#FF4785" }} /> },
    ],
  },
  {
    title: "State & Tools",
    items: [
      { name: "Redux", icon: <SiRedux style={{ fill: "#764abc" }} /> },
      { name: "Vite", icon: <SiVite style={{ fill: "#8b5cf6" }} /> },
      { name: "Node.js", icon: <FaNodeJs style={{ fill: "#16a34a" }} /> },
      { name: "Webpack", icon: <SiWebpack style={{ fill: "#8ed6fb" }} /> },
    ],
  },
  {
    title: "Testing & Version Control",
    items: [
      { name: "Jest", icon: <SiJest style={{ fill: "#C21325" }} /> },
      { name: "GitHub", icon: <FaGithub style={{ fill: "#2d3436" }} /> },
    ],
  },
  {
    title: "Deployment & Design",
    items: [
      { name: "Figma", icon: <SiFigma style={{ fill: "#F24E1E" }} /> },
      { name: "Vercel", icon: <SiVercel style={{ fill: "#000" }} /> },
      { name: "Netlify", icon: <SiNetlify style={{ fill: "#00C7B7" }} /> },
    ],
  },
];

const TechStack = () => {
  return (
    <section className="w-full px-4 md:px-0 space-y-6">
      {techCategories.map((category, idx) => (
        <div
          key={idx}
          className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 md:p-6 shadow-sm"
        >
          <h2 className="text-lg md:text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
            {category.title}
          </h2>

          <div className="flex space-x-4 overflow-x-auto py-2 scrollbar-hide">
            {category.items.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center min-w-[60px] flex-shrink-0 text-white transition duration-200 hover:shadow-md hover:rounded-lg p-2"
              >
                <div className="text-2xl">{tech.icon}</div>
                <span className="text-[0.65rem] mt-1 text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default TechStack;
