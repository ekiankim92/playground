import { useState } from "react";
import ColorsUI from "./colors.presenter";

export default function Colors() {
  const [isTrue, setIsTrue] = useState(false);

  const onClickChange = () => {
    setIsTrue((prev) => !prev);
  };

  return <ColorsUI onClickChange={onClickChange} isTrue={isTrue} />;
}
