import * as S from "./tabs.styles";
import BuxiHeaders from "../../commons/headers/buxi-headers";

export default function TabsUIItems() {
  return (
    <>
      <S.Container>
        <S.Title>네이버 여행 현황 조회</S.Title>
        <S.TabWrapper>
          <S.BasicTab>Basic</S.BasicTab>
          <S.SmartTab>Smart</S.SmartTab>
          <S.GoldTab>Gold</S.GoldTab>
        </S.TabWrapper>
      </S.Container>
      <BuxiHeaders />
    </>
  );
}
