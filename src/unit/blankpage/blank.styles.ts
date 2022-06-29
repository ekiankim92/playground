import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1400px;
  border: 2px solid #000;
  margin: 30px auto;
`;

export const Title = styled.h2`
  padding: 12px;
`;

export const DownImg = styled.img`
  width: 32px;
  height: 32px;
  margin: 20px;
  :hover {
    transform: rotate(20deg);
  }
`;

export const CrossImg = styled.img`
  width: 62px;
  height: 62px;
  margin: 20px;
  transition: width 2s, height 2s, background-color 4s, transform 2s;
  :hover {
    transform: rotate(45deg);
    width: 82px;
    height: 82px;
    background-color: lightgreen;
  }
`;
