import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",

  resources: {
    en: {
      translation: {
        saranganIntro:
          "Front-End Developer Crafting visually stunning, interactive, and responsive",
        saranganIntro2: "that solve real-world problems.",
        stackh2: "STACK",
        projecth2: "PROJECTS",
        contacth2: "CONTACT",
        live: "Live",
        KaufDE: "KaufDE",
        "Job Portal": "Job Portal",
        Bürokratie: "bureaucracy",
        "KaufDE.description":
          "An online store built with React and Tailwind CSS using the FakeStoreAPI. Features include product listing, category filtering, sorting, and add-to-cart functionality.",
        "GoldStack.description":
          "A modern construction website built with React and Tailwind CSS, featuring contact forms powered by Web3Forms and subtle animations using Framer Motion. Includes responsive layouts, animated statistics, and smooth scroll interactions.",
        "Job Portal.description":
          "A job listing app that fetches real-time data from the Arbeitnow API. Includes filtering by job title and location for a tailored job search experience.",
        "Bürokratie.description":
          "A location-based app to find public offices (Bürgerservice) across Germany. Users can filter by needed services and book a mock appointment for demo purposes. (Still in Process)",
        messageSent: "Thank you! Your message has been sent.",
      },
    },
    de: {
      translation: {
        saranganIntro:
          "Frontend-Entwickler, der visuell beeindruckende, interaktive und responsive Websites gestaltet",
        saranganIntro2: "die reale Probleme lösen.",
        stackh2: "Tech Stacks",
        projecth2: "PROJEKTE",
        contacth2: "KONTAKT",
        live: "Live",
        KaufDE: "KaufDE",
        "Job Portal": "Job Portal",
        "GoldStack.description":
          "Eine moderne Website für ein Bauunternehmen, entwickelt mit React und Tailwind CSS. Web3Forms wird für das Kontaktformular verwendet, während Framer Motion dezente Animationen ermöglicht. Enthält ein responsives Layout, animierte Statistiken und sanfte Scroll-Effekte.",
        Bürokratie: "Bürokratie",
        "KaufDE.description":
          "Ein Online-Shop, gebaut mit React und Tailwind CSS unter Verwendung der FakeStoreAPI. Funktionen umfassen Produktauflistung, Kategoriefilterung, Sortierung und Warenkorb-Funktion.",
        "Job Portal.description":
          "Eine Jobbörse, die Echtzeit-Daten von der Arbeitnow-API abruft. Es gibt Filter nach Jobtitel und Standort für eine maßgeschneiderte Jobsuche.",
        "Bürokratie.description":
          "Eine standortbasierte App, um öffentliche Ämter (Bürgerservice) in Deutschland zu finden. Nutzer können nach benötigten Services filtern und einen Demo-Termin buchen. (Noch in Bearbeitung)",
        messageSent: "Danke! Deine Nachricht wurde erfolgreich gesendet.",
      },
    },
  },
});
