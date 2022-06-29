import { ChangeEvent, FormEvent, MutableRefObject } from "react";

export interface PropsBlank {
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  onClickSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onChangeSecondInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSecondSubmit: () => void;
  myOwnNickname: string;
  onClickCountAdd: () => void;
  onClickCountMinus: () => void;
  count: number;
  clearRef: MutableRefObject<HTMLInputElement>;
}
