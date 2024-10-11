import { useEffect } from "react";
import "./App.css";
import { useTranslation } from "react-i18next";

const tg = window.Telegram.WebApp;

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    tg.ready();
    console.log(tg);
  }, []);

  const toggleLanguageChange = () => {
    const lng = i18n.language === "en" ? "ru" : "en";
    i18n.changeLanguage(lng);
  };

  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center gap-4">
      {t("Welcome")}
      <button onClick={toggleLanguageChange} className="px-4 py-2 border">
        Toggle Language
      </button>
    </main>
  );
}

export default App;
