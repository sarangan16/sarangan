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
        "Job Portal.description":
          "A job listing app that fetches real-time data from the Arbeitnow API. Includes filtering by job title and location for a tailored job search experience.",
        "Bürokratie.description":
          "A location-based app to find public offices (Bürgerservice) across Germany. Users can filter by needed services and book a mock appointment for demo purposes. (Still in Process)",
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
        Bürokratie: "Bürokratie",
        "KaufDE.description":
          "Ein Online-Shop, gebaut mit React und Tailwind CSS unter Verwendung der FakeStoreAPI. Funktionen umfassen Produktauflistung, Kategoriefilterung, Sortierung und Warenkorb-Funktion.",
        "Job Portal.description":
          "Eine Jobbörse, die Echtzeit-Daten von der Arbeitnow-API abruft. Es gibt Filter nach Jobtitel und Standort für eine maßgeschneiderte Jobsuche.",
        "Bürokratie.description":
          "Eine standortbasierte App, um öffentliche Ämter (Bürgerservice) in Deutschland zu finden. Nutzer können nach benötigten Services filtern und einen Demo-Termin buchen. (Noch in Bearbeitung)",
      },
    },
  },
});
