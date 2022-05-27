import * as S from "./hover.styles";

export default function HoverUI(props) {
  return (
    <S.Wrapper>
      <S.Title>Hover Practice</S.Title>
      <S.SecondWrapper onClick={props.onClickHidden} ref={props.hideRef}>
        <S.LogoImg src="logo.jpg/" alt="logo picture" />
        <S.SecondInnerWrapper>
          <div>Good Neighbors</div>
          <div>Bye Bye World</div>
        </S.SecondInnerWrapper>
      </S.SecondWrapper>
      <S.HoverWrapper>
        <S.GoStraight onClick={props.onClickRouter}>바로가기 </S.GoStraight>
        <S.SaveLater>찜 </S.SaveLater>
        <S.GoBack>돌아가기</S.GoBack>
      </S.HoverWrapper>
      <hr />
      <S.ImgWrapper>
        <S.FirstImgWrapper>
          <S.MoreImg src="/more.png/" />
          <S.InnerFirstWrapper>
            <div>Writing the first portion</div>
            <div>This will be my second portions</div>
            <div>This is my last portions</div>
            <div>icons</div>
            <div>icons</div>
          </S.InnerFirstWrapper>
        </S.FirstImgWrapper>
        <S.SecondImgWrapper>
          <S.ToyImg src="toy4.png" />
          <S.InnerSecondWrapper>
            <S.InnerSecondInfo>
              Click here for more information
            </S.InnerSecondInfo>
            <S.InnerSecondButton>Click</S.InnerSecondButton>
          </S.InnerSecondWrapper>
        </S.SecondImgWrapper>
        <S.DollarImg src="dollar.png" />
      </S.ImgWrapper>
    </S.Wrapper>
  );
}
