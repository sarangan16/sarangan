import { FaReact, FaHtml5, FaNodeJs, FaSass, FaGithub } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiVite,
  SiFramer,
  SiRedux,
  SiJest,
  SiFigma,
  SiVercel,
  SiNetlify,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiStripe,
  SiGreensock,
  SiWhatsapp,
  SiTwilio,
  SiJsonwebtokens,
  SiRailway,
  SiSentry,
} from "react-icons/si";
import {
  MdEmail,
  MdAutoAwesome,
  MdSchedule,
  MdInsertChart,
} from "react-icons/md";
import { useTranslation } from "react-i18next";

const categories = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: FaHtml5 },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Sass", icon: FaSass },
    ],
  },
  {
    title: "UI & Animation",
    items: [
      { name: "Framer Motion", icon: SiFramer },
      { name: "GSAP", icon: SiGreensock },
      { name: "Recharts", icon: MdInsertChart },
    ],
  },
  {
    title: "Backend & Data",
    items: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Stripe", icon: SiStripe },
      { name: "Cron Jobs", icon: MdSchedule },
      { name: "Resend", icon: MdEmail },
      { name: "EmailJS", icon: MdEmail },
    ],
  },
  {
    title: "AI & Messaging",
    items: [
      { name: "WhatsApp API", icon: SiWhatsapp },
      { name: "Twilio", icon: SiTwilio },
      { name: "LLMs (Groq · Llama)", icon: MdAutoAwesome },
    ],
  },
  {
    title: "Auth & Infra",
    items: [
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "Clerk", icon: SiVercel },
      { name: "Vercel", icon: SiVercel },
      { name: "Railway", icon: SiRailway },
      { name: "Netlify", icon: SiNetlify },
      { name: "Sentry", icon: SiSentry },
      { name: "CI/CD", icon: FaGithub },
    ],
  },
  {
    title: "State & Build",
    items: [
      { name: "Redux", icon: SiRedux },
      { name: "Vite", icon: SiVite },
    ],
  },
  {
    title: "Testing & Design",
    items: [
      { name: "Jest", icon: SiJest },
      { name: "Figma", icon: SiFigma },
      { name: "GitHub", icon: FaGithub },
    ],
  },
];

const TechStack = () => {
  const { t } = useTranslation();
  return (
    <section className="min-h-screen py-12 md:py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="font-['Poiret_One'] text-4xl md:text-6xl font-bold uppercase tracking-widest">
          {t("stack.title")}
        </h2>
      </div>

      <div className="max-w-5xl mx-auto space-y-0">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-12 border-b border-white/5 py-6"
          >
            <span className="text-[#F16D34] uppercase tracking-[0.2em] text-[10px] w-40 flex-shrink-0">
              {cat.title}
            </span>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {cat.items.map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <span
                    key={i}
                    className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition cursor-default"
                  >
                    <Icon size={13} className="flex-shrink-0" />
                    {tech.name}
                  </span>
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
