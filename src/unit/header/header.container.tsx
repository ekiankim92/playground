import { useEffect, useState } from "react";
import HeaderUI from "./header.presenter";

export default function Header() {
  const [color, setColor] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [navMenu, setNavMenu] = useState(false);

  const onScroll = () => {
    // if (typeof window !== "undefined") {
    //   window.addEventListener("scroll", () => {
    //     if (window.scrollY) {
    //       setColor(true);
    //     }
    //   });
    // setColor(true);
  };

  const onClickChangeColor = () => {
    setColor((prev) => !prev);
    alert("testing");
  };

  const onScrollEvent = () => {
    alert("scroll testing!");
  };

  const onClickHamburger = () => {
    alert("testing");
    setIsVisible((prev) => !prev);
    setIsVisible(true);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (window.scrollY) {
          setColor(true);
          setIsVisible(true);
          setNavMenu(true);
        } else {
          setColor(false);
          setIsVisible(false);
          setNavMenu(false);
        }
      });
    }
  }, []);

  return (
    <HeaderUI
      color={color}
      onScroll={onScroll}
      onClickChangeColor={onClickChangeColor}
      onScrollEvent={onScrollEvent}
      onClickHamburger={onClickHamburger}
      isVisible={isVisible}
      navMenu={navMenu}
    />
  );
}
