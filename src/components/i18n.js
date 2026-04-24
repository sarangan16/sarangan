import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  debug: false,
  lng: "de",
  fallbackLng: "de",
  interpolation: {
    escapeValue: false,
  },

  resources: {
    en: {
      translation: {
        hero: {
          title: "SARANGAN",
          role: "Frontend Developer",
          freelance: "Freelance",
          location: "Düsseldorf",
          description:
            "Frontend developer based in Germany, focused on building modern, responsive, and interactive web applications. I design and develop complete user-facing products, integrating APIs and backend services to deliver smooth, production-ready experiences for startups and businesses.",
        },
        about: {
          title: "About",
          philosophy:
            "I believe good interfaces are felt, not noticed. My job is to make complex things simple — and simple things feel effortless. I obsess over the details most people skip: load states, empty states, the 200ms that separates fast from instant.",
          approach:
            "Outside of code I'm drawn to type design, brutalist web aesthetics, and anything that challenges how a UI is supposed to look. That curiosity shows up in my work.",
          fact1: {
            label: "Background",
            value: "More than 4 years shipping production React",
          },
          fact2: {
            label: "Strength",
            value: "Turning Figma into pixel-perfect, animated UI",
          },
          fact3: {
            label: "Working style",
            value: "Async-friendly, docs-first, minimal meetings",
          },
          availability: "Open to full-time & freelance ",
        },

        navigation: {
          home: "Home",
          projects: "Projects",
          stack: "Stack",
          contact: "Contact",
        },

        buttons: {
          viewProjects: "View Projects",
          github: "GitHub",
          sendMessage: "Send Message",
          sending: "Sending...",
        },

        projects: {
          title: "Projects",

          CrownChauffeur: {
            title: "Crown Chauffeur",
            description:
              "A luxury chauffeur booking platform featuring real-time fare estimation, vehicle selection, and airport transfer scheduling. Designed with React, Tailwind CSS, and GSAP for a smooth experience. Includes email booking confirmation and form validation using React Hook Form and Zod.",
          },

          GoldStack: {
            title: "GoldStack",
            description:
              "A modern construction website built with React and Tailwind CSS, featuring contact forms powered by Web3Forms and subtle Framer Motion animations. Includes responsive layouts, animated statistics, and smooth scroll interactions.",
          },

          KaufDE: {
            title: "KaufDE",
            description:
              "An online store built with React and Tailwind CSS using the FakeStoreAPI. Features include product listing, filtering, sorting, and add-to-cart functionality.",
          },
        },

        stack: {
          title: "Tech Stack",
        },

        contact: {
          title: "Contact",
          subtitle: "Let’s build something together.",
          name: "Name",
          email: "Email",
          message: "Message",
          messageSent: "Thank you! Your message has been sent.",
        },
      },
    },

    de: {
      translation: {
        hero: {
          title: "SARANGAN",
          role: "Frontend Entwickler",
          freelance: "Freelance",
          location: "Düsseldorf",
          description:
            "Frontend-Entwickler aus Deutschland mit Fokus auf moderne, responsive und interaktive Webanwendungen. Ich entwickle komplette Benutzeroberflächen, integriere APIs und Backend-Services und liefere produktionsreife Lösungen für Startups und Unternehmen.",
        },
        about: {
          title: "Über mich",
          philosophy:
            "Ich glaube, dass gute Interfaces gefühlt, nicht bemerkt werden. Meine Aufgabe ist es, Komplexes einfach zu machen — und Einfaches mühelos anfühlen zu lassen.",
          approach:
            "Abseits von Code interessiere ich mich für Typografie, brutalistisches Webdesign und alles, was die Konventionen eines UI in Frage stellt.",
          fact1: {
            label: "Hintergrund",
            value: "4+ Jahre React in Produktion",
          },
          fact2: {
            label: "Stärke",
            value: "Figma in pixelgenaue, animierte UI umsetzen",
          },
          fact3: {
            label: "Arbeitsstil",
            value: "Async-freundlich, dokumentationsorientiert",
          },
          availability: "Offen für Festanstellung & Freelance ",
        },

        navigation: {
          home: "Start",
          projects: "Projekte",
          stack: "Technologien",
          contact: "Kontakt",
        },

        buttons: {
          viewProjects: "Projekte ansehen",
          github: "GitHub",
          sendMessage: "Nachricht senden",
          sending: "Senden...",
        },

        projects: {
          title: "Projekte",

          CrownChauffeur: {
            title: "Crown Chauffeur",
            description:
              "Eine Luxus-Chauffeur-Plattform mit Echtzeit-Preisschätzung, Fahrzeugauswahl und Flughafen-Transfers. Entwickelt mit React, Tailwind CSS und GSAP für ein reibungsloses Erlebnis. Inklusive E-Mail-Bestätigung und Formularvalidierung.",
          },

          GoldStack: {
            title: "GoldStack",
            description:
              "Eine moderne Website für ein Bauunternehmen mit React und Tailwind CSS. Enthält Web3Forms Kontaktformulare, Framer Motion Animationen, responsive Layouts und Scroll-Effekte.",
          },

          KaufDE: {
            title: "KaufDE",
            description:
              "Ein Online-Shop mit React und Tailwind CSS basierend auf der FakeStoreAPI. Funktionen: Produktliste, Filter, Sortierung und Warenkorb.",
          },
        },

        stack: {
          title: "Technologie-Stack",
        },

        contact: {
          title: "Kontakt",
          subtitle: "Lass uns etwas zusammen bauen.",
          name: "Name",
          email: "E-Mail",
          message: "Nachricht",
          messageSent: "Danke! Deine Nachricht wurde gesendet.",
        },
      },
    },
  },
});

export default i18n;
