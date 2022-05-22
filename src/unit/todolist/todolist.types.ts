import { ChangeEvent } from "react";

export interface PropsTodoList {
  onChangeInputValue: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickAddItems: () => void;
  todoList?: string[];
  clearRef?: any;
  onClickDeleteItems: (id) => () => void;
}
