import * as S from "./slider.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "antd/dist/antd.css";
import { CSSProperties } from "react";

export default function SliderUI() {
  const settings = {
    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,

    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };

  const contentStyle: CSSProperties = {
    height: "200px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <S.Wrapper>
      <S.Title>Slider</S.Title>
      <S.Sliders {...settings}>
        <S.FirstImg src="/bowl.png/" />
        <S.SecondImg src="/bowl2.png/" />
        <S.ThirdImg src="/bowl3.png/" />
        <S.FourthImg src="/bown2.png/" />
        <S.FifthImg src="/brush.png/" />
      </S.Sliders>
      <S.CarouselsWrapper>
        <S.Carousels
          autoplay
          dots={false}
          dotPosition="top"
          centerMode={true}
          draggable={true}
          swipeToSlide={true}
        >
          <S.CareouselFirstImg src="/dog1.JPG/" style={contentStyle} />
          <S.CareouselSecondImg src="/dog2.jpg/" style={contentStyle} />
          <S.CareouselThirdImg src="/dog3.jpg/" style={contentStyle} />
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </S.Carousels>
      </S.CarouselsWrapper>
    </S.Wrapper>
  );
}
