import * as S from "./partners-css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Partners() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: "linear",
    style: {
      width: "80%",
      height: 180,
      display: "flex",
      alignItems: "center",
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          style: {
            // background: "blue",
          },
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          style: {
            background: "yellow",
          },
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          style: {
            background: "red",
          },
        },
      },
    ],
  };

  return (
    <S.Wrapper>
      <div>buxi Partners</div>
      <div>Introducing Buxi Partners</div>
      <Slider {...settings}>
        <S.FirstSlideWrapper>
          <S.BowlImg src="bowl2.png" />
        </S.FirstSlideWrapper>
        <S.SecondWrapper>
          <h2>Second</h2>
        </S.SecondWrapper>
        <S.ThirdWrapper>
          <h3>Third</h3>
        </S.ThirdWrapper>
        <S.FourthWrapper>
          <h3>Fourth</h3>
        </S.FourthWrapper>
        <div>
          <h3>Fifth</h3>
        </div>
        <div>
          <h3>Sixth</h3>
        </div>
        <div>
          <div>Hello WORLD!!!</div>
        </div>
      </Slider>
    </S.Wrapper>
  );
}
