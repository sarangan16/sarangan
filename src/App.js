import React, { useState, useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./components/i18n";
import { useTranslation } from "react-i18next";
import Loader from "./components/Loader";

function App() {
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, [i18n]);

  return (
    <div className="bg-black text-white min-h-screen">
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />

          <main className="w-full">
            <Hero />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
