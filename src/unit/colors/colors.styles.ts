import styled from "@emotion/styled";

export const WholeWrapper = styled.div`
  display: flex;
`;

export const FirstWrapper = styled.div`
  width: 600px;
  height: 1200px;
  border: 1px solid #000;
  margin: 60px 120px;
  background-color: ${(props) => props.color};
  transition: ease all 1000ms;
`;

export const SecondWrapper = styled.div`
  width: 400px;
  height: 400px;
  border: 1px solid #000;
  margin: 60px 0px 0px 20px;
  position: fixed;
  right: 220px;
  @media only screen and (max-width: 900px) {
    visibility: hidden;
  }
`;

export const ThirdWrapper = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid #000;
  position: relative;
  top: 620px;
  z-index: 2;
  background-color: ${(props) => (props.isTrue ? "lightcoral" : "lightblue")};
`;
