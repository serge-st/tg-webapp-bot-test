import { Suspense, useEffect } from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import { Footer } from "./Footer";
import { Button } from "@/components/ui/button";
import { Header } from "./Header";

const tg = window.Telegram.WebApp;

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    tg.ready();

    console.log(tg.initDataUnsafe.user);
  }, []);

  const toggleLanguageChange = () => {
    const lng = i18n.language === "en" ? "ru" : "en";
    i18n.changeLanguage(lng);
  };

  const getMainStyle = () => {
    const bgColor = `bg-[white]`;
    const textColor = `text-[black]`;
    return (
      "w-full min-h-screen flex flex-col justify-center items-center gap-4" +
      " " +
      bgColor +
      " " +
      textColor
    );
  };

  return (
    <main className={getMainStyle()}>
      <Suspense fallback={"loading..."}>
        <Header />
        {t("Welcome")}
        <button onClick={toggleLanguageChange} className="px-4 py-2 border">
          {t("ToggleLanguage")}
        </button>
        <Button>Click me</Button>
        <Footer />
      </Suspense>
    </main>
  );
}

export default App;
