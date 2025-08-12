import { useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./components/i18n";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, []);

  return (
    <div className="App container  mx-auto px-6 max-w-4xl">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
