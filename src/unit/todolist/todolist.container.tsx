import { ChangeEvent, useRef, useState } from "react";
import TodoListSecondUI from "./todolist.presenter";
import _ from "lodash";

export default function TodoListSecond() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const clearRef = useRef<HTMLInputElement>(null);

  const onChangeInputValue = _.debounce(
    (event: ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.value);
      setInputValue(event.target.value);
    },
    600
  );

  const onClickAddItems = () => {
    setTodoList([...todoList, inputValue]);
    clearRef.current.value = "";
  };

  const onClickDeleteItems = (id: string) => {
    // alert("testing");
    const newList = todoList.filter((el) => el.id !== id);
    setTodoList(newList);
    // return [...newList];
    console.log("id", id);
    // console.log("el.id", _id);
  };

  return (
    <TodoListSecondUI
      onChangeInputValue={onChangeInputValue}
      onClickAddItems={onClickAddItems}
      onClickDeleteItems={onClickDeleteItems}
      todoList={todoList}
      clearRef={clearRef}
    />
  );
}
