import styled from "@emotion/styled";
import { useState } from "react";

interface Props {
  isTrue?: boolean;
}

const Wrapper = styled.div`
  scroll-behavior: smooth;
`;

const Header = styled.div`
  width: 100%;
  height: 100px;
  background: linear-gradient(90deg, #1c1c57 -2.95%, #006a83 100%););
  display: flex;
  align-items: center;
  justify-content: space-around;
  scroll-behavior: smooth;
`;

const Label = styled.a`
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  scroll-behavior: smooth;
`;

const First = styled.section`
  width: 100%;
  height: 620px;
  background-color: ${(props: Props) => (props.isTrue ? "lightcyan" : "khaki")};
  scroll-behavior: smooth;
`;

const Second = styled.section`
  width: 100%;
  height: 540px;
  background: lightgreen;
  scroll-behavior: smooth;
`;

const Third = styled.section`
  width: 100%;
  height: 740px;
  background: khaki;
  scroll-behavior: smooth;
`;

const Fourth = styled.section`
  width: 100%;
  height: 540px;
  background: lightcyan;
  scroll-behavior: smooth;
`;

const Fifth = styled.section`
  width: 100%;
  height: 620px;
  background: lightyellow;
  scroll-behavior: smooth;
`;

export default function Anchor() {
  const [isTrue, setIsTrue] = useState(false);

  const onClickColor = () => {
    setIsTrue((prev) => !prev);
    console.log("isTrue:", isTrue);
  };

  return (
    <Wrapper>
      <Header>
        <Label href="#first">Main</Label>
        <Label href="#second">About Us</Label>
        <Label href="#third">Partners</Label>
        <Label href="#fourth">FAQ</Label>
        <Label href="#fifth">Contact</Label>
      </Header>
      <First onClick={onClickColor} isTrue={isTrue}>
        <div id="first">First Section</div>
      </First>
      <Second>
        <div id="second">Second Section</div>
      </Second>
      <Third>
        <div id="third">Third Section</div>
      </Third>
      <Fourth>
        <div id="fourth">Fourth Section</div>
      </Fourth>
      <Fifth>
        <div id="fifth">Fifth Section</div>
      </Fifth>
    </Wrapper>
  );
}
