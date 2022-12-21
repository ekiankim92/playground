import * as S from "./milk.styles";

export default function MilkUI() {
  return (
    <S.Wrapper>
      <S.BackgroundImageWrapper>
        <S.LeftWrapper>
          <S.CarWrapper>
            <S.CarImg src="milk/car.png" />
          </S.CarWrapper>
          <S.CarLine />
          <S.CarArrow />
          <S.CarB>
            <S.B>B</S.B>
          </S.CarB>
          <S.PlaneWrapper>
            <S.PlaneImg src="milk/plane.png" />
          </S.PlaneWrapper>
          <S.PlaneLine />
          <S.PlaneArrow />
          <S.PlantB>
            <S.B>B</S.B>
          </S.PlantB>
          <S.SnorkelWrapper>
            <S.SnorkelImg src="milk/snorkel.png" />
          </S.SnorkelWrapper>
          <S.SnorkelLine />
          <S.SnorkelArrow />
          <S.SnorkelB>
            <S.B>B</S.B>
          </S.SnorkelB>
        </S.LeftWrapper>
        <S.PhoneImg src="milk/phone.png" />
        <S.ScreenImg src="milk/screen.png" />
        <S.LogoImg src="milk/buxi.png" />
        <S.RightWrapper>
          <S.PresentsWrapper>
            <S.PresentsImg src="milk/presents.png" />
          </S.PresentsWrapper>
          <S.HotelWrapper>
            <S.HotelImg src="milk/hotel.png" />
          </S.HotelWrapper>
          <S.CutleryWrapper>
            <S.CutleryImg src="milk/cutlery.png" />
          </S.CutleryWrapper>
        </S.RightWrapper>
      </S.BackgroundImageWrapper>
    </S.Wrapper>
  );
}
