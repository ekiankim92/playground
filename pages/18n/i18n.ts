import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import TranslationEn from "./translation.en.json";
import TranslationKo from "./translation.ko.json";

const resource = {
  en: {
    translations: TranslationEn,
  },
  ko: {
    translations: TranslationKo,
  },
};

i18n.use(initReactI18next).init({
  resources: resource,
  lng: "en",
  fallbackLng: "en",
  debug: true,
  defaultNS: "translations",
  ns: "translations",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
