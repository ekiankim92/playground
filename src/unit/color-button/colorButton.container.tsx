import { ChangeEvent, KeyboardEvent, useState } from "react";
import ColorButtonUI from "./colorButton.presenter";

export default function ColorButton() {
  const [color, setColor] = useState("");
  const [name, setName] = useState("");
  const [isMatch, setIsMatch] = useState(false);
  const [isRed, setIsRed] = useState(false);

  const onChangeColor = (event: ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
    // console.log("color:", event.target.value);
    if (event.target.value === "red" || event.target.value === "RED") {
      setIsRed(true);
    } else {
      setIsRed(false);
    }
    console.log("color:", event.target.value);

    switch (event.target.value) {
      case "blue":
        return setIsMatch(true);
      case "green":
        return setIsMatch(true);
      default:
        return setIsMatch(false);
    }
  };

  const onClickSubmit = () => {
    alert("testing submit");
  };

  const onKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const userName = prompt("please enter your name");
      if (userName) {
        setName(userName);
      } else {
        setName("");
      }
    }
    console.log("name:", name);
  };

  return (
    <ColorButtonUI
      onChangeColor={onChangeColor}
      color={color}
      onClickSubmit={onClickSubmit}
      onKeyPress={onKeyPress}
      name={name}
      isRed={isRed}
      isMatch={isMatch}
    />
  );
}
