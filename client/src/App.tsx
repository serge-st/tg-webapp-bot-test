import { useEffect } from "react";
import "./App.css";
import { useTranslation } from "react-i18next";

const tg = window.Telegram.WebApp;

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    tg.ready();
    // console.log(tg);
  }, []);

  const toggleLanguageChange = () => {
    const lng = i18n.language === "en" ? "ru" : "en";
    i18n.changeLanguage(lng);
  };

  const hangleTgLinkOpen = () => {
    tg.openTelegramLink("https://t.me/black_triangle_tg");
  };

  const hangleTgLinkOpen2 = () => {
    tg.openLink("https://google.com");
  };

  const hangleTgLinkOpen3 = () => {
    tg.openTelegramLink("https://t.me/Thorstein_W?start=direct");
  };

  const handleArticleOpen = () => {
    tg.openLink("https://telegra.ph/whbfkwjbwu8owefn78y8-05-03");
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
      {t("Welcome")}
      <button onClick={toggleLanguageChange} className="px-4 py-2 border">
        {t("ToggleLanguage")}
      </button>
      <button onClick={hangleTgLinkOpen2} className="underline">
        {t("AnotherWebsite")}
      </button>
      <button onClick={hangleTgLinkOpen} className="underline">
        {t("OpenOurChannel")}
      </button>
      <button onClick={hangleTgLinkOpen3} className="underline">
        {t("OpenPersonalChat")}
      </button>
      <button onClick={handleArticleOpen} className="underline">
        {t("OpenArticle")}
      </button>
    </main>
  );
}

export default App;
