import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "ru"],
    resources: {
      en: {
        translation: {
          Welcome: "Welcome to the app",
          ToggleLanguage: "Toggle Language",
          AnotherWebsite: "Open another website (google)",
          OpenOurChannel: "Open Our Channel @black_triangle_tg",
          OpenPersonalChat: "Open personal chat with @GreatGuy",
          OpenArticle: "Open article",
        },
      },
      ru: {
        translation: {
          Welcome: "Добро пожаловать в аппликацию",
          ToggleLanguage: "Переключить язык",
          AnotherWebsite: "Открыть другой сайт (google)",
          OpenOurChannel: "Открыть наш канал @black_triangle_tg",
          OpenPersonalChat: "Открыть личный чат с @GreatGuy",
          OpenArticle: "Открыть статью",
        },
      },
    },
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
