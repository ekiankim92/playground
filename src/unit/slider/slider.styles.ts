import styled from "@emotion/styled";
import Slider from "react-slick";
import { Carousel } from "antd";
import "antd/dist/antd.css";

export const Wrapper = styled.div`
  border: 1px solid #000;
  width: 100%;
`;

export const Title = styled.h2`
  padding: 12px;
`;

export const Sliders = styled(Slider)`
  width: 100%;
  height: 320px;
`;

export const FirstImg = styled.img`
  height: 320px;
  object-fit: contain;
`;

export const SecondImg = styled.img`
  height: 320px;
  object-fit: contain;
`;

export const ThirdImg = styled.img`
  height: 320px;
  object-fit: contain;
`;

export const FourthImg = styled.img`
  height: 320px;
  object-fit: contain;
`;

export const FifthImg = styled.img`
  height: 320px;
  object-fit: contain;
`;

export const CarouselsWrapper = styled.div`
  /* background-color: lightcoral; */
  /* margin: 20px; */
  /* padding: 10px; */
  height: 320px;
`;

export const Carousels = styled(Carousel)`
  background-color: lightblue;
  margin-top: 60px;
  height: 320px;
`;

export const CareouselFirstImg = styled.img`
  height: 300px;
  object-fit: contain;
`;

export const CareouselSecondImg = styled.img`
  height: 300px;
  object-fit: contain;
`;

export const CareouselThirdImg = styled.img`
  height: 300px;
  object-fit: contain;
`;
