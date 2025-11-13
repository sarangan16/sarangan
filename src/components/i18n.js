import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        introHeading: "Hi, I’m <bold>Sarangan</bold>, a Frontend Developer",
        introText:
          "I specialize in crafting <strong>modern, responsive</strong> and <highlight>interactive experiences</highlight> that bring ideas to life on the web.",
        viewProjects: "View Projects",
        githubRepo: "Github Repo",
        stackh2: "STACK",
        projecth2: "PROJECTS",
        contacth2: "CONTACT",
        live: "Live",

        // Projects
        KaufDE: "KaufDE",
        "KaufDE.description":
          "An online store built with React and Tailwind CSS using the FakeStoreAPI. Features include product listing, category filtering, sorting, and add-to-cart functionality.",

        GoldStack: "GoldStack",
        "GoldStack.description":
          "A modern construction website built with React and Tailwind CSS, featuring contact forms powered by Web3Forms and subtle animations using Framer Motion. Includes responsive layouts, animated statistics, and smooth scroll interactions.",

        "Job Portal": "Job Portal",
        "Job Portal.description":
          "A job listing app that fetches real-time data from the Arbeitnow API. Includes filtering by job title and location for a tailored job search experience.",

        Bürokratie: "Bürokratie",
        "Bürokratie.description":
          "A location-based app to find public offices (Bürgerservice) across Germany. Users can filter by needed services and book a mock appointment for demo purposes. (Still in Process)",

        CrownChauffeur: "Crown Chauffeur",
        "CrownChauffeur.description":
          "A luxury chauffeur booking platform featuring real-time fare estimation, vehicle selection, and airport transfer scheduling. Designed with React, Tailwind CSS, and GSAP for a smooth, responsive experience. Includes email booking confirmation and form validation using React Hook Form and Zod.",

        // Messages
        messageSent: "Thank you! Your message has been sent.",

        // About section
        aboutText:
          "I’m passionate about building modern, responsive, and user-friendly web applications. I have experience creating e-commerce sites, dashboards, and interactive interfaces using React.js, JavaScript, and Tailwind CSS. Skilled in API integration, form validation, payment gateways, and databases, I focus on turning designs into high-performance, maintainable, and accessible interfaces.",
      },
    },

    de: {
      translation: {
        introHeading:
          "Hi, ich bin <bold>Sarangan</bold>, ein Frontend-Entwickler",
        introText:
          "Ich spezialisiere mich auf die Entwicklung von <strong>modernen, responsiven</strong> und <highlight>interaktiven Erlebnissen</highlight>, die Ideen im Web zum Leben erwecken.",
        viewProjects: "Projekte ansehen",
        githubRepo: "Github Repo",
        stackh2: "Technologie-Stack",
        projecth2: "PROJEKTE",
        contacth2: "KONTAKT",
        live: "Live",

        // Projects
        KaufDE: "KaufDE",
        "KaufDE.description":
          "Ein Online-Shop, gebaut mit React und Tailwind CSS unter Verwendung der FakeStoreAPI. Funktionen umfassen Produktauflistung, Kategoriefilterung, Sortierung und Warenkorb-Funktion.",

        GoldStack: "GoldStack",
        "GoldStack.description":
          "Eine moderne Website für ein Bauunternehmen, entwickelt mit React und Tailwind CSS. Web3Forms wird für das Kontaktformular verwendet, während Framer Motion dezente Animationen ermöglicht. Enthält ein responsives Layout, animierte Statistiken und sanfte Scroll-Effekte.",

        "Job Portal": "Job Portal",
        "Job Portal.description":
          "Eine Jobbörse, die Echtzeit-Daten von der Arbeitnow-API abruft. Es gibt Filter nach Jobtitel und Standort für eine maßgeschneiderte Jobsuche.",

        Bürokratie: "Bürokratie",
        "Bürokratie.description":
          "Eine standortbasierte App, um öffentliche Ämter (Bürgerservice) in Deutschland zu finden. Nutzer können nach benötigten Services filtern und einen Demo-Termin buchen. (Noch in Bearbeitung)",

        CrownChauffeur: "Crown Chauffeur",
        "CrownChauffeur.description":
          "Eine luxuriöse Chauffeur-Buchungsplattform mit Echtzeit-Fahrpreisschätzung, Fahrzeugauswahl und Flughafen-Transferplanung. Entwickelt mit React, Tailwind CSS und GSAP für ein reibungsloses, responsives Benutzererlebnis. Beinhaltet Buchungsbestätigung per E-Mail und Formularvalidierung mit React Hook Form und Zod.",

        // Messages
        messageSent: "Danke! Deine Nachricht wurde erfolgreich gesendet.",

        // About section
        aboutText:
          "Ich bin leidenschaftlich daran interessiert, moderne, responsive und benutzerfreundliche Webanwendungen zu entwickeln. Ich habe Erfahrung mit der Erstellung von E-Commerce-Seiten, Dashboards und interaktiven Benutzeroberflächen mit React.js, JavaScript und Tailwind CSS. Mit Kenntnissen in API-Integration, Formularvalidierung, Zahlungssystemen und Datenbanken konzentriere ich mich darauf, Designs in leistungsstarke, wartbare und zugängliche Oberflächen umzuwandeln.",
      },
    },
  },
});

export default i18n;
