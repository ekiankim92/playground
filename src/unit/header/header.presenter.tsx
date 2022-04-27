import * as S from "./header.styles";
import { Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

export default function HeaderUI(props) {
  const menu = (
    <S.MenuList>
      <Menu.Item>1st menu item</Menu.Item>
      <Menu.Item>2nd menu item</Menu.Item>
      <Menu.Item>3rd menu item</Menu.Item>
    </S.MenuList>
  );

  return (
    <>
      <S.Wrapper color={props.color} onScroll={props.onScrollEvent}>
        <S.HeaderWrapper color={props.color} onScroll={props.onScroll}>
          <S.Netflix>Netflix</S.Netflix>
          <S.OptionsWrapper navMenu={props.navMenu}>
            <S.Home color={props.color} onClick={props.onClickChangeColor}>
              Home
            </S.Home>
            <nav>Series</nav>
            <nav>Movies</nav>
            <nav>New Trend</nav>
            <nav>My Pick</nav>
          </S.OptionsWrapper>
        </S.HeaderWrapper>
        <S.HamburgerMenu
          src="/more.png/"
          onClick={props.onClickHamburger}
          isVisible={props.isVisible}
        />
        <S.DropMenu overlay={menu} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Click me
              <DownOutlined />
            </Space>
          </a>
        </S.DropMenu>
      </S.Wrapper>
    </>
  );
}
