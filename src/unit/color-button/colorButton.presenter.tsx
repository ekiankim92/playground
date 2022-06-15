import * as S from "./colorButton.styles";
import { IPropsColor } from "./colorButton.types";

export default function ColorButtonUI(props: IPropsColor) {
  return (
    <S.Wrapper>
      <S.Title>Colored Button</S.Title>
      {props.name && (
        <S.Welcome>
          Welcome, <S.WelcomeSpan>{props.name}</S.WelcomeSpan>
        </S.Welcome>
      )}
      <S.Label>What color do you want the button to be?</S.Label>
      <S.InputWrapper>
        <S.Input
          type="text"
          onChange={props.onChangeColor}
          onKeyPress={props.onKeyPress}
        />
      </S.InputWrapper>
      <S.ButtonWrapper>
        <S.SubmitButton
          onClick={props.onClickSubmit}
          isRed={props.isRed}
          isMatch={props.isMatch}
        >
          Submit
        </S.SubmitButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
