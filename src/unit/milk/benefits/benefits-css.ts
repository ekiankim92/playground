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
  width: 1000px;
  display: flex;
  justify-content: space-evenly;
  background: lightblue;
`;

export const BoxOneWrapper = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: lightcoral;
`;

const Expand = keyframes`
    from {
        width: 160px;
        height: 160px;
    }
    to {
        width: 200px;
        height: 200px;
    }
`;

export const Test1 = styled.div`
  width: 160px;
  height: 160px;
  border: 1px solid #000;
  text-align: center;
  animation: ${Expand} 2s infinite;
  animation-delay: 2s;
`;

export const BoxTwoWrapper = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: khaki;
`;

export const Test2 = styled.div`
  width: 160px;
  height: 160px;
  border: 1px solid #000;
  text-align: center;
  animation-delay: 4s;
  animation: ${Expand} 2s infinite;
`;

export const BoxThreeWrapper = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: lightgreen;
`;

export const Test3 = styled.div`
  width: 160px;
  height: 160px;
  border: 1px solid #000;
  text-align: center;
  animation: ${Expand} 2s ease;
  animation-delay: 6s;
  animation-iteration-count: 2;
`;

export const BoxFourWrapper = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: beige;
`;

export const Test4 = styled.div`
  width: 160px;
  height: 160px;
  border: 1px solid #000;
  text-align: center;
  animation: ${Expand} 2s;
  animation-delay: 8s;
  animation-iteration-count: 2;
`;
