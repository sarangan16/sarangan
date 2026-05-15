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
            "Frontend Developer based in Germany, building fast, scalable React applications for real-world SaaS products. I turn complex systems — from e-commerce to logistics — into responsive, production-ready interfaces with seamless API integration and a strong focus on performance.",
          available: "Available for work",
          role_line1: "Frontend",
          role_line2: "Developer",
          name: "Sarangan",
          cta_projects: "Projects",
        },
        about: {
          title: "About",
          philosophy:
            "I believe good interfaces are felt, not noticed. I obsess over the details most people skip — the transitions, the empty states, the moment something goes from working to actually feeling right.",
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
          JobBoard: {
            title: "JobBoard",
            description:
              "Built for myself while job hunting in Germany. Kanban board with drag and drop, real authentication, and per-user cloud storage. Free for everyone to use.",
          },

          GoldStack: {
            title: "GoldStack",
            description:
              "A modern construction website built with React and Tailwind CSS, featuring contact forms powered by Web3Forms and subtle Framer Motion animations. Includes responsive layouts, animated statistics, and smooth scroll interactions.",
          },

          KaufDE: {
            title: "KaufDE",
            description:
              "A production e-commerce platform delivered to a real client. Stripe checkout, live product search, cart management, and GSAP animations — fully responsive across all devices.",
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
            "Frontend-Entwickler mit Sitz in Deutschland, spezialisiert auf die Entwicklung schneller und skalierbarer React-Anwendungen für praxisnahe SaaS-Produkte. Ich verwandle komplexe Systeme – von E-Commerce bis Logistik – in responsive, produktionsreife Benutzeroberflächen mit nahtloser API-Integration und starkem Fokus auf Performance.",
          available: "Verfügbar für Projekte",
          role_line1: "Frontend",
          role_line2: "Entwickler",
          name: "Sarangan",
          cta_projects: "Projekte",
        },
        about: {
          title: "Profil",
          philosophy:
            "Ich glaube, dass gute Interfaces gefühlt werden, nicht bemerkt. Ich bin besessen von den Details, die die meisten überspringen — die Übergänge, die leeren Zustände, der Moment, in dem etwas aufhört zu funktionieren und anfängt, sich richtig anzufühlen.",
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
          JobBoard: {
            title: "JobBoard",
            description:
              "Gebaut für mich selbst — während meiner Jobsuche in Deutschland. Kanban-Board mit Drag-and-Drop, echter Authentifizierung und benutzerspezifischem Cloud-Speicher. Kostenlos für jeden nutzbar.",
          },

          GoldStack: {
            title: "GoldStack",
            description:
              "Eine moderne Website für ein Bauunternehmen mit React und Tailwind CSS. Enthält Web3Forms Kontaktformulare, Framer Motion Animationen, responsive Layouts und Scroll-Effekte.",
          },

          KaufDE: {
            title: "KaufDE",
            description:
              "Eine produktionsreife E-Commerce-Plattform, die für einen echten Kunden entwickelt wurde. Stripe-Checkout, Live-Produktsuche, Warenkorb-Verwaltung und GSAP-Animationen — vollständig responsiv auf allen Geräten.",
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
