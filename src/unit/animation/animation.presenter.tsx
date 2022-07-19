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
        <S.CrossImg src="cross.png/" />
      </div>
      <div>
        <S.DocImg src="doctor.jpg/" />
      </div>
      <S.ImgWrapper>
        <S.HospitalCover>
          <div>Hospital</div>
          <div>Img of hospital beds</div>
        </S.HospitalCover>
        <S.HospitalImg src="hospital.jpg/" />
      </S.ImgWrapper>
      <S.Button>Click Here!</S.Button>
      <S.SmallBoxContainer>
        <div>Small Box</div>
      </S.SmallBoxContainer>
      <S.SecondBox>
        <div>Second Box</div>
      </S.SecondBox>
      <S.UpNDown>
        <div>Up and Down</div>
      </S.UpNDown>
    </S.Wrapper>
  );
}
