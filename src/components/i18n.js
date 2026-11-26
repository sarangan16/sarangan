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
          role: "Full-Stack Developer",
          freelance: "Freelance",
          location: "Düsseldorf",
          description:
            "Full-stack developer with years of experience, from the interface to the database. React, TypeScript and Next.js on the frontend, Node.js, Express and PostgreSQL on the backend. My own product, Zlockd, is a WhatsApp booking SaaS for any business that runs on appointments, with paying clients in Germany.",
          available: "Open to full-time roles and projects",
          role_line1: "Frontend",
          role_line2: "Developer",
          name: "Sarangan",
          cta_projects: "Projects",
          roles: ["Developer", "Founder"],
        },
        about: {
          title: "About",
          intro:
            "I build complete web applications: interface, API, database and deployment. I care about fast load times, clean and maintainable code, and the details that often get missed, like empty states and error messages. With Zlockd I took a product from the first idea to paying clients on my own.",
          experience: {
            label: "Experience",
            value: "Several years, frontend and backend",
          },
          frontend: {
            label: "Frontend",
            value: "React, TypeScript, Next.js, Tailwind",
          },
          backend: {
            label: "Backend",
            value: "Node.js, Express, PostgreSQL, Stripe",
          },
          product: {
            label: "Own product",
            value: "Zlockd, WhatsApp booking SaaS with paying clients",
          },
          workstyle: {
            label: "Way of working",
            value: "Experienced with remote work, clean documentation",
          },
          availability: "Open to full-time roles and projects",
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
          backend: "Backend",
          more: "Read more",
          less: "Show less",

          Zlockd: {
            title: "Zlockd · Founder",
            description:
              "A registered business with paying clients in Germany. Salons and other appointment-based businesses take bookings directly through WhatsApp: replies, booking, confirmation and reminders around the clock, in seven languages. I built the frontend, backend and WhatsApp integration on my own.",
            caseStudy: [
              {
                label: "My role",
                text: "I built the product on my own, from the WhatsApp integration and backend to the dashboard.",
              },
              {
                label: "How it works",
                text: "A customer writes on WhatsApp, the system detects the language and preferred time, checks free slots in PostgreSQL, confirms the booking and sends a reminder later. The salon sees everything in real time in the dashboard.",
              },
              {
                label: "Tech",
                text: "Next.js and React on the frontend, Node.js and PostgreSQL on the backend, Twilio for WhatsApp, Stripe for monthly subscriptions with automatic renewal, an LLM for replies in seven languages.",
              },
            ],
          },
          Duesseldoener: {
            title: "Düsseldöner",
            description:
              "Live website for a döner restaurant in Düsseldorf-Bilk. SEO-first Next.js site with structured data for local search, a live open/closed badge, German/English, mobile-first video hero and direct ordering via delivery platforms. Menu content is CMS-ready.",
          },
          CrownChauffeur: {
            title: "Crown Chauffeur",
            description:
              "A luxury chauffeur booking platform featuring real-time fare estimation, vehicle selection, and airport transfer scheduling. Designed with React, Tailwind CSS, and GSAP for a smooth experience. Includes email booking confirmation and form validation using React Hook Form and Zod.",
            backend:
              "Express backend. Fare based on route and road tolls, pickup and drop-off points via a free UK API.",
          },
          JobBoard: {
            title: "JobBoard",
            description:
              "Built for my own job search in Germany. Kanban board with drag and drop, real authentication and per-user cloud storage. Demo: demo@myjob.com · Password: 654321",
            backend:
              "Supabase for login and data storage, each user only sees their own data.",
          },

          GoldStack: {
            title: "GoldStack",
            description:
              "A modern construction website built with React and Tailwind CSS, featuring contact forms powered by Web3Forms and subtle Framer Motion animations. Includes responsive layouts, animated statistics, and smooth scroll interactions.",
          },

          KaufDE: {
            title: "KaufDE",
            description:
              "Online shop with product search, cart and Stripe checkout through my own Express backend. GSAP animations, responsive on all devices. Product data comes from a test API (DummyJSON).",
            backend:
              "Own Express API for the Stripe checkout. Cart with quantity and price calculation, contact form via EmailJS.",
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
          role: "Full-Stack-Entwickler",
          freelance: "Freelance",
          location: "Düsseldorf",
          description:
            "Full-Stack-Entwickler mit mehrjähriger Erfahrung, von der Oberfläche bis zur Datenbank. React, TypeScript und Next.js im Frontend, Node.js, Express und PostgreSQL im Backend. Mein eigenes Produkt Zlockd ist ein WhatsApp-Buchungssystem als SaaS für alle Betriebe, die mit Terminen arbeiten, mit zahlenden Kunden in Deutschland.",
          available: "Offen für Festanstellung und Projekte",
          role_line1: "Frontend",
          role_line2: "Entwickler",
          name: "Sarangan",
          cta_projects: "Projekte",
          roles: ["Entwickler", "Gründer"],
        },
        about: {
          title: "Profil",
          intro:
            "Ich entwickle komplette Webanwendungen: Oberfläche, API, Datenbank und Deployment. Mir sind schnelle Ladezeiten, sauberer und wartbarer Code und die Details wichtig, die oft untergehen, etwa leere Zustände und Fehlermeldungen. Mit Zlockd habe ich ein Produkt allein von der ersten Idee bis zu zahlenden Kunden gebracht.",
          experience: {
            label: "Erfahrung",
            value: "Mehrjährig, Frontend und Backend",
          },
          frontend: {
            label: "Frontend",
            value: "React, TypeScript, Next.js, Tailwind",
          },
          backend: {
            label: "Backend",
            value: "Node.js, Express, PostgreSQL, Stripe",
          },
          product: {
            label: "Eigenes Produkt",
            value: "Zlockd, WhatsApp-Buchungs-SaaS mit zahlenden Kunden",
          },
          workstyle: {
            label: "Arbeitsweise",
            value: "Remote-erfahren, saubere Dokumentation",
          },
          availability: "Offen für Festanstellung und Projekte",
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
          backend: "Backend",
          more: "Mehr erfahren",
          less: "Weniger",

          Zlockd: {
            title: "Zlockd · Gründer",
            description:
              "Ein eingetragenes Unternehmen mit zahlenden Kunden in Deutschland. Salons und andere Betriebe mit Terminen nehmen Buchungen direkt über WhatsApp an: Antworten, Buchung, Bestätigung und Erinnerungen rund um die Uhr, in sieben Sprachen. Frontend, Backend und WhatsApp-Anbindung habe ich allein entwickelt.",
            caseStudy: [
              {
                label: "Meine Rolle",
                text: "Ich habe das Produkt allein entwickelt, von der WhatsApp-Anbindung über das Backend bis zum Dashboard.",
              },
              {
                label: "Ablauf",
                text: "Eine Kundin schreibt per WhatsApp, das System erkennt Sprache und Wunschtermin, prüft freie Zeiten in PostgreSQL, bestätigt die Buchung und schickt später eine Erinnerung. Der Salon sieht alles in Echtzeit im Dashboard.",
              },
              {
                label: "Technik",
                text: "Next.js und React im Frontend, Node.js und PostgreSQL im Backend, Twilio für WhatsApp, Stripe für monatliche Abos mit automatischer Verlängerung, ein LLM für die Antworten in sieben Sprachen.",
              },
            ],
          },
          Duesseldoener: {
            title: "Düsseldöner",
            description:
              "Live-Website für ein Döner-Restaurant in Düsseldorf-Bilk. SEO-orientierte Next.js-Seite mit strukturierten Daten für die lokale Suche, Live-Öffnungsstatus, Deutsch/Englisch, Mobile-first Video-Hero und direkter Bestellung über Lieferplattformen. Speisekarte CMS-ready.",
          },
          CrownChauffeur: {
            title: "Crown Chauffeur",
            description:
              "Eine Luxus-Chauffeur-Plattform mit Echtzeit-Preisschätzung, Fahrzeugauswahl und Flughafen-Transfers. Entwickelt mit React, Tailwind CSS und GSAP für ein reibungsloses Erlebnis. Inklusive E-Mail-Bestätigung und Formularvalidierung.",
            backend:
              "Express-Backend. Fahrpreis nach Strecke und Mautgebühren, Abhol- und Zielorte über eine freie UK-API.",
          },
          JobBoard: {
            title: "JobBoard",
            description:
              "Für meine eigene Jobsuche in Deutschland gebaut. Kanban-Board mit Drag-and-Drop, echter Authentifizierung und eigenem Cloud-Speicher pro Nutzer. Demo: demo@myjob.com · Passwort: 654321",
            backend:
              "Supabase für Login und Datenspeicherung, jeder Nutzer sieht nur seine eigenen Daten.",
          },

          GoldStack: {
            title: "GoldStack",
            description:
              "Eine moderne Website für ein Bauunternehmen mit React und Tailwind CSS. Enthält Web3Forms Kontaktformulare, Framer Motion Animationen, responsive Layouts und Scroll-Effekte.",
          },

          KaufDE: {
            title: "KaufDE",
            description:
              "Online-Shop mit Produktsuche, Warenkorb und Stripe-Checkout über ein eigenes Express-Backend. GSAP-Animationen, auf allen Geräten responsiv. Produktdaten kommen aus einer Test-API (DummyJSON).",
            backend:
              "Eigene Express-API für den Stripe-Checkout. Warenkorb mit Mengen- und Preisberechnung, Kontaktformular über EmailJS.",
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
