import styled from "@emotion/styled";
import { Dropdown, Menu } from "antd";

export const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #000;
  position: fixed;
  top: 0;
  transition: 0.5s;
  /* background-color: #000; */
  background-color: ${(props) => (props.color ? "lightcoral" : "white")};
  /* background-color: black; */
`;

export const HeaderWrapper = styled.div`
  display: flex;
`;

export const Netflix = styled.div`
  color: red;
  width: 70%;
  height: 80px;
  font-size: 40px;
  padding: 12px 0px 20px 20px;
`;

export const OptionsWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: green;
  visibility: ${(props) => (props.navMenu ? "visible" : "hidden")};
  @media only screen and (max-width: 900px) {
    /* visibility: ${(props) => (props.navMenu ? "hidden" : "visible")}; */
    visibility: hidden;
  }
`;

export const Home = styled.nav`
  color: #fff;
  background-color: ${(props) => (props.color ? "red" : "black")};
`;

export const HamburgerMenu = styled.img`
  width: 24px;
  height: 24px;
  visibility: hidden;
  @media only screen and (max-width: 900px) {
    /* visibility: ${(props) => (props.isVisible ? "hidden" : "visible")}; */
    /* background-color: white; */
    visibility: visible;
  }
`;

export const DropMenu = styled(Dropdown)`
  width: 800px;
`;

export const MenuList = styled(Menu)`
  width: 300px;
`;
