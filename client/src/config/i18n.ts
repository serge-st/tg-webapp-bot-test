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
        },
      },
      ru: {
        translation: {
          Welcome: "Добро пожаловать в аппликацию",
        },
      },
    },
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
