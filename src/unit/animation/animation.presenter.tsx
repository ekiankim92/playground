import * as S from "./animation.styles";

export default function AnimationUI() {
  return (
    <S.Wrapper>
      <S.Title>Animation Practice</S.Title>
      <div>
        <img src="more.png/" />
      </div>
      <div>
        <img src="search.png/" />
      </div>
      <div>
        <img src="down.png/" />
      </div>
      <div>
        <img src="cross.png/" />
      </div>
      <S.SmallBoxContainer>
        <div>Small Box</div>
      </S.SmallBoxContainer>
    </S.Wrapper>
  );
}
