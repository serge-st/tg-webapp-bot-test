import i18n, { InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend, { ChainedBackendOptions } from "i18next-chained-backend";
import LocalStorageBackend, {
  LocalStorageBackendOptions,
} from "i18next-localstorage-backend";
import HttpApi from "i18next-http-backend";

const localStorageBackendOptions: LocalStorageBackendOptions = import.meta.env
  .PROD
  ? {
      expirationTime: 7 * 24 * 60 * 60 * 1000, // 7 days
    }
  : {};

export const supportedLngs: readonly string[] = ["en", "ru"];

i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    supportedLngs,
    ns: ["core"],
    defaultNS: "core",
    fallbackLng: "en",
    debug: import.meta.env.DEV,
    backend: {
      backends: [LocalStorageBackend, HttpApi],
      backendOptions: [localStorageBackendOptions],
    } as ChainedBackendOptions,
    interpolation: {
      escapeValue: false,
    },
  } as InitOptions);

export default i18n;
