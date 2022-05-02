import * as S from "./colors.styles";
import { SketchPicker, PhotoshopPicker } from "react-color";
import { useState } from "react";
import { IPropsColors } from "./colors.types";

export default function ColorsUI(props: IPropsColors) {
  const [color, setColors] = useState<string>("#FFF");

  const onChangeColors = (data) => {
    setColors(data.hex);
    console.log(data.hex);
  };

  return (
    <>
      <S.WholeWrapper>
        <S.FirstWrapper color={color}>
          <div>Background Image Change</div>
        </S.FirstWrapper>
        <S.SecondWrapper>
          <h2>Color Palette</h2>
          {/* <SketchPicker color={color} onChangeComplete={(color) => setColors(color.hex)}/> */}
          <SketchPicker color={color} onChangeComplete={onChangeColors} />
        </S.SecondWrapper>
        <S.ThirdWrapper isTrue={props.isTrue} onClick={props.onClickChange}>
          <div>Color Change When Clicked</div>
        </S.ThirdWrapper>
      </S.WholeWrapper>
      <div>
        <PhotoshopPicker />
      </div>
    </>
  );
}
