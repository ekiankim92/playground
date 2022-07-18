import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const bounce = keyframes`
from, 20%, 53%, 80%, to {
  transform: translate3d(0,0,0);
}

40%, 43% {
  transform: translate3d(0, -30px, 0);
}

70% {
  transform: translate3d(0, -15px, 0);
}

90% {
  transform: translate3d(0,-4px,0);
}
`;

export const Wrapper = styled.div`
  width: 100%;
  border: 1px solid #000;
`;

export const Title = styled.h2`
  padding: 12px;
`;

export const SmallBoxContainer = styled.div`
  width: 140px;
  height: 140px;
  margin: 0px auto;
  background-color: lightblue;
  animation: ${bounce} 1s ease infinite;
`;
