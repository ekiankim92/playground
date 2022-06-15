import { ChangeEvent, KeyboardEvent } from "react";

export interface IPropsColor {
  color?: string;
  name: string;
  onChangeColor: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  isMatch?: boolean;
  isRed?: boolean;
  onKeyPress: (event: KeyboardEvent<HTMLInputElement>) => void;
}

export interface IPropsBoolean {
  isMatch?: boolean;
  isRed?: boolean;
}
