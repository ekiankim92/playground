import * as S from "./scroll.styles";

export default function ScollUI(props) {
  return (
    <S.Wrapper>
      <S.Title>Scroll Up Practice</S.Title>
      <S.Label>First Input</S.Label>
      <S.FirstInputWrapper>
        <S.Input onChange={props.onChangeFirstInput} ref={props.myRef} />
        <S.ErrorMessage>{props.error}</S.ErrorMessage>
      </S.FirstInputWrapper>
      <S.Label>Second Input</S.Label>
      <S.SecondInputWrapper>
        <S.Input onChange={props.onChangeSecondInput} ref={props.secondRef} />
        <div>{props.error}</div>
      </S.SecondInputWrapper>
      <S.Label>Third Input</S.Label>
      <S.ThirdInputWrapper>
        <div>This is refactoring</div>
        <S.Input
          name="third"
          onChange={props.onChangeInputs}
          ref={props.allRef}
        />
      </S.ThirdInputWrapper>
      <S.Label>Fourth Input</S.Label>
      <S.FourthInputWrapper>
        <div>This is refactoring</div>
        <S.Input
          name="fourth"
          onChange={props.onChangeInputs}
          ref={props.allRef}
        />
      </S.FourthInputWrapper>
      <S.Label>Fifth Input</S.Label>
      <S.FifthInputWrapper>
        <S.Input onChange={props.onChangeFifthInput} ref={props.fifthRef} />
        <div>{props.error}</div>
      </S.FifthInputWrapper>
      <S.ButtonWrapper>
        <S.Button onClick={props.onClickSubmit}>Submit</S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
