import { ChangeEvent, useEffect, useRef, useState } from "react";
import TodoListUI from "./todo.presenter";
import _ from "lodash";

export default function TodoList() {
  const [todo, setTodo] = useState([]);
  const [list, setList] = useState([]);
  const clearRef = useRef<HTMLInputElement>(null);

  const onChangeList = _.debounce((event: ChangeEvent<HTMLInputElement>) => {
    setList([event.target.value]);
    console.log(event.target.value);
    console.log(list);
  });

  const onClickTodoList = (event) => {
    // clearRef.current.value = "";
    setList([...list]);
    console.log(event.target.value);
    console.log("todo:", todo);
    localStorage.setItem("list", JSON.stringify(list));
  };

  useEffect(() => {
    JSON.parse(localStorage.getItem("list"));
  }, [list]);

  return (
    <TodoListUI
      onClickTodoList={onClickTodoList}
      onChangeList={onChangeList}
      todo={todo}
      list={list}
      clearRef={clearRef}
    />
  );
}
