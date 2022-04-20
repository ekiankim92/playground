import { useState } from "react";
import PropsStyleUI from "./propsstyle.presenter";

export default function PropsStyle() {
  const [isFont, setIsFont] = useState(false);

  const onClickChangeFont = () => {
    setIsFont((prev) => !prev);
  };

  return <PropsStyleUI isFont={isFont} onClickChangeFont={onClickChangeFont} />;
}
