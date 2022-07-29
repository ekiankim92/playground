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

const colors = keyframes`
from, 0%, to {
    background-color: red;
}

25% {
    background-color: yellow;
}

50% {
    background-color: "blue"
}

100% {
    background-color: "green"
}
`;

const updown = keyframes`
    from, 0%, to {
        top: 0px;
    }

    25% {
        top: 25px;
    }

    50% {
        left: 100px;
    }

    100% {
        right: 100px;
    }
`;

export const Wrapper = styled.div`
  width: 100%;
  border: 1px solid #000;
`;

export const Title = styled.h2`
  padding: 12px;
`;

export const CrossImg = styled.img`
  width: 40px;
  height: 40px;
  margin: 8px;
  transition-property: width, height;
  :hover {
    transform: rotate(45deg);
    transition-duration: 1s;
    width: 60px;
    height: 60px;
  }
`;

export const DocImg = styled.img`
  margin: 12px;
  width: 300px;
  height: 300px;
  :hover {
    transform: scaleX(-1);
  }
`;

export const ImgWrapper = styled.div``;

export const HospitalCover = styled.div`
  width: 300px;
  height: 300px;
  margin: 12px;
  position: absolute;
  z-index: 1;
  color: #fff;
  visibility: hidden;
  /* display: none; */
  :hover {
    background-color: #000;
    visibility: visible;
  }
`;

export const HospitalImg = styled.img`
  margin: 12px;
  width: 300px;
  height: 300px;
  position: relative;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  :hover {
    transform: rotateY(180deg);
  }
`;

export const Button = styled.button`
  margin: 8px;
  width: 340px;
  height: 80px;
  transition-property: width, font-size;
  transition-delay: 1s; // after 1 second the hover will take effect
  font-size: 22px;
  :hover {
    transition-duration: 2s; // time that the action will be finished in
    width: 220px;
    font-size: 32px;
  }
`;

export const SmallBoxContainer = styled.div`
  width: 140px;
  height: 140px;
  margin: 0px auto;
  background-color: lightblue;
  animation: ${bounce} 11s ease infinite;
`;

export const SecondBox = styled.div`
  width: 140px;
  height: 140px;
  margin: 0px auto;
  position: relative;
  background-color: lightyellow;
  animation: ${colors} 15s ease infinite;
`;

export const UpNDown = styled.div`
  width: 140px;
  height: 140px;
  margin: 0px auto;
  background-color: lightgreen;
  position: relative;
  animation: ${updown} 12s ease infinite;
`;

export const LinearButton = styled.button`
  margin: 12px;
  width: 260px;
  height: 60px;
  background: linear-gradient(to left, #3ba3de 50%, #fff 50%) right;
  background-size: 200% 100%;
  transition: all 0.5s ease-out;
  :hover {
    background-position: left;
  }
`;
