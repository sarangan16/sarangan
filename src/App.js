import React, { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./components/i18n";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Loader from "./components/Loader";

function App() {
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, []);

  return (
    <div className="App container mx-auto">
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />
          <Hero />
        </>
      )}
    </div>
  );
}

export default App;
