import * as S from "./scroll.styles";

export default function ScollUI() {
  return (
    <S.Wrapper>
      <S.Title>Scroll Up Practice</S.Title>
      <S.Label>First Input</S.Label>
      <S.FirstInputWrapper>
        <S.Input />
      </S.FirstInputWrapper>
      <S.Label>Second Input</S.Label>
      <S.SecondInputWrapper>
        <S.Input />
      </S.SecondInputWrapper>
      <S.Label>Third Input</S.Label>
      <S.ThirdInputWrapper>
        <S.Input />
      </S.ThirdInputWrapper>
      <S.Label>Fourth Input</S.Label>
      <S.FourthInputWrapper>
        <S.Input />
      </S.FourthInputWrapper>
      <S.Label>Fifth Input</S.Label>
      <S.FifthInputWrapper>
        <S.Input />
      </S.FifthInputWrapper>
      <S.ButtonWrapper>
        <S.Button>Submit</S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
