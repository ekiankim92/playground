import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const SlideCar = keyframes`
    from {
        transform: translatex(0px) translatey(0px);
        opacity: 0;
    }
    to {
        transform: translatex(65px) translatey(56px);
        opacity: 1;
    }
`;

const SlidePlane = keyframes`
    from {
        left: 90px;
        opacity: 0;
    }
    to {
        left: 180px;
        opacity: 1;
    }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  margin: 34px auto;
  background: #f7fbfe;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackgroundImageWrapper = styled.div`
  width: 1200px;
  height: 540px;
  background-image: url("milk/world.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PhoneImg = styled.img`
  position: absolute;
`;

export const ScreenImg = styled.img`
  border-radius: 16px;
  position: absolute;
`;

export const LogoImg = styled.img`
  position: absolute;
  z-index: 1;
`;

export const LeftWrapper = styled.div`
  position: relative;
  width: 320px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CarWrapper = styled.div`
  width: 82px;
  height: 82px;
  background: #e9f6fb;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 80px;
`;

export const CarImg = styled.img`
  width: 54px;
  height: 54px;
`;

export const CarLine = styled.div`
  width: 88px;
  border: 1px dashed #9696cf;
  position: absolute;
  right: 94px;
  top: 100px;
  transform: rotate(40deg);
`;

export const CarArrow = styled.div`
  position: absolute;
  color: #fff;
  width: 0px;
  height: 0px;
  border: 12px solid #9696cf;
  border-color: transparent transparent transparent #9696cf;
  transform: rotate(40deg);
  right: 88px;
  top: 120px;
`;

export const CarB = styled.div`
  position: absolute;
  width: 44px;
  height: 44px;
  background: #9696cf;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 148px;
  top: 50px;
  animation: ${SlideCar} 5s infinite;
`;

export const B = styled.div`
  font-weight: 700;
  font-size: 26px;
`;

export const PlaneWrapper = styled.div`
  width: 114px;
  height: 114px;
  background: #e9f6fb;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlaneImg = styled.img`
  width: 66px;
  height: 66px;
`;

export const PlaneLine = styled.div`
  width: 88px;
  border: 1px dashed #9696cf;
  position: absolute;
  top: 204px;
  right: 118px;
`;

export const PlaneArrow = styled.div`
  position: absolute;
  color: #fff;
  width: 0px;
  height: 0px;
  border: 12px solid #9696cf;
  border-color: transparent transparent transparent #9696cf;
  top: 193px;
  right: 100px;
`;

export const PlantB = styled.div`
  position: absolute;
  width: 44px;
  height: 44px;
  background: #add8e6;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 183px;
  right: 180px;
  animation: ${SlidePlane} 3s infinite;
`;

export const SnorkelWrapper = styled.div`
  width: 73px;
  height: 73px;
  background: #e9f6fb;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 80px;
`;

export const SnorkelImg = styled.img`
  width: 47px;
  height: 47px;
`;

export const RightWrapper = styled.div`
  width: 320px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export const PresentsWrapper = styled.div`
  width: 112px;
  height: 112px;
  background: #e9f6fb;
  box-shadow: -4px 4px 6px rgba(0, 0, 0, 0.1);
  transform: matrix(-1, 0, 0, 1, 0, 0);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 80px;
`;

export const PresentsImg = styled.img`
  width: 72px;
  height: 72px;
`;

export const HotelWrapper = styled.div`
  width: 66px;
  height: 66px;
  background: #e9f6fb;
  box-shadow: -4px 4px 6px rgba(0, 0, 0, 0.1);
  transform: matrix(-1, 0, 0, 1, 0, 0);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 40px;
`;

export const HotelImg = styled.img`
  width: 38px;
  height: 38px;
`;

export const CutleryWrapper = styled.div`
  width: 82px;
  height: 82px;
  background: #e9f6fb;
  box-shadow: -4px 4px 6px rgba(0, 0, 0, 0.1);
  transform: matrix(-1, 0, 0, 1, 0, 0);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 80px;
`;

export const CutleryImg = styled.img`
  width: 45px;
  height: 45px;
`;
