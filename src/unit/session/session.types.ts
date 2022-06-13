import { ChangeEvent } from "react";

export interface IPropsSession {
  name?: string;
  phone?: string;
  email?: string;
  isDisabled: boolean;
  onChangeInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  isBrowser: boolean;
  onClickEdit: () => void;
  isEdit: boolean;
}

export interface IPropsDisabled {
  isDisabled: Boolean;
}
