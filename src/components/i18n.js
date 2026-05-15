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
          JobBoard: {
            title: "JobBoard",
            description:
              "A full-stack job application tracker I built for myself while navigating the German job market. Tired of losing track of applications across spreadsheets and emails, I built this to stay organized — then decided to make it free for everyone. Features email authentication, a Kanban board with drag and drop, per-user cloud storage with Row Level Security, and status history tracking across Applied, Interview, Offer, and Rejected stages.",
          },

          GoldStack: {
            title: "GoldStack",
            description:
              "A modern construction website built with React and Tailwind CSS, featuring contact forms powered by Web3Forms and subtle Framer Motion animations. Includes responsive layouts, animated statistics, and smooth scroll interactions.",
          },

          KaufDE: {
            title: "KaufDE",
            description:
              "A modern e-commerce experience built with React and Tailwind CSS powered by the DummyJSON API. Features dynamic product browsing with category filtering, live search, sorting, and a fully functional cart system with a slide-in drawer for seamless item management. Includes real Stripe checkout integration, EmailJS-powered contact forms, GSAP-powered scroll animations, and a fully responsive design optimized across all screen sizes.",
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
          JobBoard: {
            title: "JobBoard",
            description:
              "Ein Full-Stack-Bewerbungstracker, den ich für mich selbst entwickelt habe — während meiner eigenen Jobsuche auf dem deutschen Arbeitsmarkt. Da ich den Überblick über meine Bewerbungen in Tabellen und E-Mails verloren hatte, habe ich dieses Tool gebaut, um organisiert zu bleiben — und mich dann entschieden, es kostenlos für alle zugänglich zu machen. Mit E-Mail-Authentifizierung, einem Kanban-Board mit Drag-and-Drop, benutzerspezifischem Cloud-Speicher mit Row Level Security und Statusverlauf über die Phasen Beworben, Interview, Angebot und Abgelehnt.",
          },

          GoldStack: {
            title: "GoldStack",
            description:
              "Eine moderne Website für ein Bauunternehmen mit React und Tailwind CSS. Enthält Web3Forms Kontaktformulare, Framer Motion Animationen, responsive Layouts und Scroll-Effekte.",
          },

          KaufDE: {
            title: "KaufDE",
            description:
              "Ein modernes E-Commerce-Erlebnis, entwickelt mit React und Tailwind CSS auf Basis der DummyJSON API. Enthält dynamisches Produkt-Browsing mit Kategoriefilterung, Live-Suche, Sortierung sowie ein vollständig integriertes Warenkorb-System mit Slide-in-Drawer für eine nahtlose Produktverwaltung. Inklusive echter Stripe-Checkout-Integration, kontaktformularen mit EmailJS, GSAP-gestützten Scroll-Animationen und vollständig responsivem Design für alle Bildschirmgrößen.",
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
