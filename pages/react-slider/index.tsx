import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "antd/dist/antd.css";
import Slider from "react-slick";
import styled from "@emotion/styled";

const settings = {
  dots: true,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  cssEase: "linear",
  appendDots: (dots) => (
    <DotsContainer>
      <ul style={{ margin: "0px" }}> {dots} </ul>
    </DotsContainer>
  ),
};

export default function ReactSlider() {
  return (
    <>
      <RSlider {...settings}>
        <div style={{ height: 450 }}>First Page</div>
        <div>Second Page</div>
        <div>Third Page</div>
      </RSlider>
    </>
  );
}

const RSlider = styled(Slider)`
  background-color: lavender;
  height: 100%;
  height: 880px;

  .slick-dots {
    top: 10px;
    left: 100px;
  }
`;

const DotsContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      display: inline-block;
      margin-right: 5px;
      button {
        font-size: 14px;
        color: #888;
        padding: 5px;
        border: 1px solid #888;
        border-radius: 50%;
        background: transparent;
        cursor: pointer;
        outline: none;
        transition: all 0.3s;
        &:hover {
          background: #888;
          color: white;
        }
      }
    }
  }
`;
