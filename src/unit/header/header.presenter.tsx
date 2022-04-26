import * as S from "./header.styles";

export default function HeaderUI(props) {
  return (
    <S.Wrapper color={props.color}>
      <S.HeaderWrapper color={props.color} onScroll={props.onScroll}>
        <S.Netflix>Netflix</S.Netflix>
        <S.OptionsWrapper>
          <S.Home color={props.color} onClick={props.onClickChangeColor}>
            Home
          </S.Home>
          <nav>Series</nav>
          <nav>Movies</nav>
          <nav>New Trend</nav>
          <nav>My Pick</nav>
        </S.OptionsWrapper>
      </S.HeaderWrapper>
    </S.Wrapper>
  );
}
