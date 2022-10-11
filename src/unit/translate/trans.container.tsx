import { useEffect } from "react";
import TranslateUI from "./trans.presenter";

export default function Translate() {
  const onClickEng = () => {
    console.log("this is eng");
    const language = "en";
    localStorage.setItem("language", language);
  };

  const onClickKor = () => {
    console.log("this is kor");
    const language = "ko";
    localStorage.setItem("language", language);
  };

  useEffect(() => {
    const language = window.navigator.language;
    localStorage.setItem("language", JSON.stringify(language.slice(0, 2)));
  }, []);

  return <TranslateUI onClickEng={onClickEng} onClickKor={onClickKor} />;
}
