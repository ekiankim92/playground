import i18next from "./i18n";
import Translate from "../../src/unit/18n/18n.container";

export default function Translation() {
  const onClickLang = (lang: string) => () => {
    i18next.changeLanguage(lang);
  };

  return (
    <div>
      <h1>Translation Page</h1>
      <button onClick={onClickLang("ko")}>KOR</button>
      <button onClick={onClickLang("en")}>ENG</button>
      <Translate />
    </div>
  );
}
