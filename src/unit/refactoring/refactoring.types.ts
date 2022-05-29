import { ChangeEvent, MutableRefObject } from "react";

export interface PropsRefactoring {
  email?: string;
  password?: string;
  name?: string;
  onChangeInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: (data: any) => void;
  onChangePasswordConfirm: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus: MutableRefObject<HTMLInputElement>;
}
