import * as S from "./trans.styles";
import { faFlagUsa, faFlag } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export default function TranslateUI(props) {
  useEffect(() => {
    GetLanguage();
  }, []);

  const GetLanguage = () => {
    JSON.parse(localStorage.getItem("language"));
  };

  return (
    <S.Wrapper>
      <S.Title>Languages</S.Title>
      <S.FlagsWrapper>
        <S.Icons icon={faFlagUsa} onClick={props.onClickEng} />
        <S.Icons icon={faFlag} onClick={props.onClickKor} />
      </S.FlagsWrapper>
    </S.Wrapper>
  );
}
