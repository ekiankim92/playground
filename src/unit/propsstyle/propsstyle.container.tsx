import { ChangeEvent, useEffect, useState } from "react";
import PropsStyleUI from "./propsstyle.presenter";
import _ from "lodash";

export default function PropsStyle() {
  const [isFont, setIsFont] = useState(false);
  const [isDisable, isSetDisable] = useState(true);
  const [spread, setSpread] = useState({
    username: "",
    password: "",
  });

  const onClickChangeFont = () => {
    console.log("testing");
    console.log(isFont);
    setIsFont((prev) => !prev);
  };

  // const onChangeInput = _.debounce((event: ChangeEvent<HTMLInputElement>) => {
  //   setSpread({
  //     ...spread,
  //     [event.target.name]: event.target.value,
  //   });
  //   console.log("event.target.value:", event.target.value);
  //   console.log("spread.username:", spread.username);
  //   console.log("spread.password:", spread.password);
  //   console.log(spread);
  // }, 500);

  const onChangeInput = async (event: ChangeEvent<HTMLInputElement>) => {
    setSpread({
      ...spread,
      [event.target.name]: event.target.value,
    });
    console.log("event.target.value:", event.target.value);
    console.log("spread.username:", spread.username);
    console.log("spread.password:", spread.password);
    console.log(spread);
    if (spread.username && spread.password) {
      isSetDisable(false);
    } else {
      isSetDisable(true);
    }
  };

  const onClickSubmit = () => {
    if (!spread.username && !spread.password) {
      alert("이름과 비밀번호를 입력해주세요");
    }
  };

  return (
    <PropsStyleUI
      isFont={isFont}
      onClickChangeFont={onClickChangeFont}
      onClickSubmit={onClickSubmit}
      isDisable={isDisable}
      onChangeInput={onChangeInput}
    />
  );
}
