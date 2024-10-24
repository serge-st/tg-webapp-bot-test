import i18n, { InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend, { ChainedBackendOptions } from "i18next-chained-backend";
import LocalStorageBackend from "i18next-localstorage-backend";
import HttpApi from "i18next-http-backend";

i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "ru"],
    fallbackLng: "en",
    debug: import.meta.env.DEV,
    backend: {
      backends: [LocalStorageBackend, HttpApi],
      backendOptions: [
        {
          expirationTime: 7 * 24 * 60 * 60 * 1000, // 7 days
        },
      ],
    } as ChainedBackendOptions,
    interpolation: {
      escapeValue: false,
    },
  } as InitOptions);

export default i18n;
