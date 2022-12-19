import styled from "@emotion/styled";

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
  /* position: absolute; */
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
