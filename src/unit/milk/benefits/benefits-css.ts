import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 18px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const SecondWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 16px;
`;

export const Title = styled.h2`
  text-align: center;
`;

const ContributeExpand = keyframes`
    from {
        width: 20%;
        position: relative;
    }
    to {
        width: 25%;
        position: relative;
    }
`;

export const Contribute = styled.div`
  width: 200px;
  height: 100%;
  border: 1px solid #000;
  position: relative;
  z-index: 1;
  animation: ${ContributeExpand} 2s ease-out;
`;

export const Customers = styled.div`
  width: 200px;
  height: 100%;
  border: 1px solid #000;
  position: relative;
`;

export const Marketing = styled.div`
  width: 200px;
  height: 100%;
  border: 1px solid #000;
  position: relative;
`;

export const Shake = styled.div`
  width: 200px;
  height: 100%;
  border: 1px solid #000;
  position: relative;
`;

export const BoxWrapper = styled.div`
  width: 600px;
  display: flex;
  background: lightyellow;
  position: relative;
`;

export const Test1 = styled.div`
  border: 1px solid #000;
  width: 200px;
  height: 200px;
  position: relative;
  left: 20px;
`;

export const Test2 = styled.div`
  border: 1px solid #000;
  width: 200px;
  height: 200px;
  position: relative;
  right: 50px;
`;
