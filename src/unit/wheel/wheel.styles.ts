import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoImg = styled.img`
  padding: 16px;
`;

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const LeftWrapper = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const OnLabel = styled.div`
  font-size: 120px;
  width: 600px;
  text-align: center;
  line-height: 100%;
  padding-right: 70px;
  color: #fff;
  -webkit-text-fill-color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  background: lightblue;
`;

export const OffLabel = styled.div`
  font-size: 140px;
  width: 600px;
  text-align: end;
  line-height: 100%;
  padding-right: 30px;
  background: lightgreen;
`;

export const Title = styled.div`
  font-size: 120px;
  width: 600px;
  text-align: center;
  color: #1dc078;
  line-height: 100%;
  background: lavender;
`;

export const RightWrapper = styled.section`
  width: 50%;
  max-height: 380px;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EnterWrapper = styled.div`
  width: 480px;
  height: 100%;
  padding: 14px 0px;
  display: flex;
  align-items: end;
`;

export const EnterInnerWrapper = styled.div`
  width: 280px;
  height: 45px;
  display: flex;
  align-items: end;
  background: linear-gradient(to left, #fff 50%, #1dc078 50%) right;
  background-size: 200% 100%;
  transition: all 0.5s ease-out;
  :hover {
    cursor: pointer;
    background-position: left;
  }
`;

export const Enter = styled.div`
  width: 160px;
  height: 45px;
  font-size: 30px;
  font-weight: 500;
  line-height: 150%;
  text-align: center;
`;

export const ArrowImg = styled.img`
  width: 120px;
  position: relative;
  bottom: 7px;
  right: 38px;
`;

export const Intro = styled.div`
  font-size: 24px;
  width: 480px;
  padding: 24px 0px 0px 24px;
`;

export const Online = styled.div`
  font-size: 48px;
  font-weight: 500;
  width: 480px;
  padding: 12px 0px 0px 24px;
`;

export const Offline = styled.div`
  font-size: 48px;
  font-weight: 500;
  width: 480px;
  padding: 12px 0px 0px 24px;
`;

export const BulletListWrapper = styled.div`
  font-weight: 500;
  font-size: 18px;
  width: 480px;
  padding: 24px;
`;

export const ScrollWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 20%;
  background: yellow;
`;

const Bounce = keyframes`
 0%, 20%, 40%, 60%, 80%, 100% {transform: translateY(5);}
  50% {transform: translateY(-10px);}
`;

export const MouseIcon = styled(FontAwesomeIcon)`
  width: 30px;
  height: 30px;
  padding: 12px;
  position: relative;
  animation: ${Bounce} 2s ease infinite;
  :hover {
    cursor: pointer;
  }
`;

export const ArrowIcon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  padding: 2px;
  :hover {
    cursor: pointer;
  }
`;

export const Scroll = styled.div`
  font-size: 12px;
  padding: 4px;
  :hover {
    cursor: pointer;
  }
`;
