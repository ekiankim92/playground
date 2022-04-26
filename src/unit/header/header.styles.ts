import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #000;
  position: fixed;
  top: 0;
  transition: 0.5s;
  /* background-color: #000; */
  background-color: ${(props) => (props.color ? "black" : "white")};
  /* background-color: black; */
`;

export const HeaderWrapper = styled.div`
  display: flex;
`;

export const Netflix = styled.div`
  color: red;
  width: 50%;
  height: 80px;
  font-size: 40px;
  padding: 12px 0px 20px 20px;
`;

export const OptionsWrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Home = styled.nav`
  color: #fff;
  background-color: ${(props) => (props.color ? "red" : "black")};
`;
