import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 800px;
  height: 800px;
  border: 1px solid #000;
  margin: 30px auto;
`;

export const Title = styled.h2`
  padding: 12px;
`;

export const SecondWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 360px;
  height: 70px;
  border: 1px solid #000;
  margin: 20px auto;
`;

export const LogoImg = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
`;

export const SecondInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

export const HoverWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 360px;
  height: 70px;
  border: 1px solid red;
  margin: 20px auto;
  position: absolute;
  top: 103px;
  right: 533px;
  opacity: 0;
  background: #000;
  :hover {
    opacity: 1;
    color: #fff;
    background-color: #000;
  }
`;

export const GoStraight = styled.span`
  font-size: 22px;
  font-weight: 700;
  padding: 12px;
  border-right: 1px solid #fff;
  line-height: 1px;
  :hover {
    cursor: pointer;
    color: lightgray;
  }
`;

export const SaveLater = styled.span`
  font-size: 22px;
  font-weight: 700;
  padding: 12px;
  border-right: 1px solid #fff;
  line-height: 1px;
  :hover {
    cursor: pointer;
    color: lightgray;
  }
`;

export const GoBack = styled.span`
  font-size: 22px;
  font-weight: 700;
  padding: 12px;
  :hover {
    cursor: pointer;
    color: lightgray;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 220px;
  justify-content: space-around;
`;

export const FirstImgWrapper = styled.div``;

export const InnerFirstWrapper = styled.div`
  position: absolute;
  top: 226px;
  opacity: 0;
  :hover {
    opacity: 1;
  }
`;

export const MoreImg = styled.img`
  width: 230px;
  border: 1px solid #000;
  opacity: 0.3;
  :hover {
    opacity: 1;
  }
`;

export const ToyImg = styled.img`
  width: 200px;
  object-fit: fill;
  border: 1px solid #000;
  img:hover {
    opacity: 0;
    transition: opacity 2s;
  }
`;

export const DollarImg = styled.img`
  width: 200px;
  object-fit: cover;
  border: 1px solid #000;
  opacity: 0.1;
  :hover {
    opacity: 0.8;
  }
`;

export const SecondImgWrapper = styled.div``;

export const InnerSecondWrapper = styled.div`
  position: relative;
  top: -210px;
  height: 100%;
  opacity: 0;
  :hover {
    opacity: 1;
  }
`;

export const InnerSecondInfo = styled.p`
  width: 200px;
  position: relative;
  top: 64px;
`;

export const InnerSecondButton = styled.button`
  /* width: 180px; */
  width: 100%;
  height: 32px;
  background-color: #000;
  color: red;
  border: none;
  position: relative;
  top: 56px;
`;
