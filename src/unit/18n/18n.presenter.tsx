import { useTranslation } from "react-i18next";

export default function TranslateUI() {
  const { t } = useTranslation();

  return (
    <>
      <p>{t("hello")}</p>
      <p>{t("name")}</p>
    </>
  );
}
