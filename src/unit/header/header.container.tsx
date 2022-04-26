import { useEffect, useState } from "react";
import HeaderUI from "./header.presenter";

export default function Header() {
  const [color, setColor] = useState(false);

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

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (window.scrollY) {
          setColor(true);
        } else {
          setColor(false);
        }
      });
    }
  }, []);

  return (
    <HeaderUI
      color={color}
      onScroll={onScroll}
      onClickChangeColor={onClickChangeColor}
    />
  );
}
