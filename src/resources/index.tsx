import translation from "./strings";
import { Cookies } from "react-cookie";

const cookie = new Cookies();

export const strings = {
  get(key: string) {
    // if (typeof window !== "undefined") {
    //   const language = localStorage.getItem("lang");
    // }

    // const language = localStorage.getItem("lang");

    const language = cookie.get("lang");

    // const language = "en" || "ko";

    // console.log("strings.get:", language);
    const value = translation[language] && translation[language][key];
    // console.log("value:", value);
    if (!value) {
      return `missing: ${key}`;
    } else {
      return value;
    }
  },
};
