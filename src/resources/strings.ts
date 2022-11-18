import koStr from "./ko-strings";
import enStr from "./en-strings";

export default {
  ko: {
    ...koStr.newKo.register,
  },
  en: {
    ...enStr.newEn.register,
  },
};
