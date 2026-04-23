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

const categories = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: FaReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Bootstrap", icon: FaBootstrap },
      { name: "Sass", icon: FaSass },
    ],
  },
  {
    title: "UI & Animation",
    items: [
      { name: "Framer Motion", icon: SiFramer },
      { name: "Storybook", icon: SiStorybook },
    ],
  },
  {
    title: "State & Build Tools",
    items: [
      { name: "Redux", icon: SiRedux },
      { name: "Vite", icon: SiVite },
      { name: "Webpack", icon: SiWebpack },
      { name: "Node.js", icon: FaNodeJs },
    ],
  },
  {
    title: "Testing & Version Control",
    items: [
      { name: "Jest", icon: SiJest },
      { name: "GitHub", icon: FaGithub },
    ],
  },
  {
    title: "Deployment & Design",
    items: [
      { name: "Figma", icon: SiFigma },
      { name: "Vercel", icon: SiVercel },
      { name: "Netlify", icon: SiNetlify },
    ],
  },
];

const TechStack = () => {
  return (
    <section className=" py-24 px-6 md:px-16">
      {/* HEADER */}
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
          Tech Stack
        </h2>
      </div>

      {/* GRID */}
      <div className="max-w-5xl mx-auto space-y-14">
        {categories.map((cat, idx) => (
          <div key={idx} className="space-y-6">
            {/* CATEGORY TITLE */}
            <h3 className="text-[#F16D34] uppercase tracking-[0.3em] text-xs">
              {cat.title}
            </h3>

            {/* ITEMS GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {cat.items.map((tech, i) => {
                const Icon = tech.icon;

                return (
                  <div
                    key={i}
                    className="
                      group border border-white/5
                      rounded-xl p-4
                      flex items-center gap-3
                      hover:border-[#F16D34]/40
                      transition-all duration-300
                    "
                  >
                    {/* ICON */}
                    <Icon className="text-white/70 group-hover:text-[#F16D34] transition" />

                    {/* NAME */}
                    <span className="text-sm text-white/60 group-hover:text-white transition">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
