import { ChangeEvent, useRef, useState } from "react";
import TodoListSecondUI from "./todolist.presenter";
// import _ from "lodash";

export default function TodoListSecond() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const clearRef = useRef<HTMLInputElement>(null);

  const onChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  const onClickAddItems = () => {
    if (inputValue.length === 0) {
      alert("Please enter your tasks");
      return;
    }
    setTodoList([inputValue, ...todoList]);
    clearRef.current.value = "";
    console.log("todoList:", todoList);
  };

  // const onKeyPress = (event) => {
  //   if (inputValue.length === 0) {
  //     alert("Please enter your task");
  //   } else if (event.keyCode === 13) {
  //     alert("added items");
  //   }

  //   if (event.key === "Enter") {
  //     setTodoList([...todoList, inputValue]);
  //   }
  // };

  const onClickDeleteItems = (id: string) => () => {
    // alert("testing");
    const newList = todoList.filter((el) => el.id !== id);
    setTodoList(newList);
    // return [...newList];
    console.log("userId", id);
  };

  return (
    <TodoListSecondUI
      onChangeInputValue={onChangeInputValue}
      onClickAddItems={onClickAddItems}
      onClickDeleteItems={onClickDeleteItems}
      // onKeyPress={onKeyPress}
      todoList={todoList}
      clearRef={clearRef}
    />
  );
}
