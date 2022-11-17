import { ChangeEvent } from "react";

export interface FormProps {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  passwordConfirm?: string;
  onChangeInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  //   onClickSubmit: () => void;
  onClickSubmit: any;
}
