import { ChangeEvent } from "react";

export interface PropsTodoList {
  todo?: string[];
  list?: string[];
  onClickTodoList: (event) => void;
  onChangeList: (event: ChangeEvent<HTMLInputElement>) => void;
  clearRef?: any;
  hide: boolean;
}

export interface PropsHide {
  hide?: boolean;
}
