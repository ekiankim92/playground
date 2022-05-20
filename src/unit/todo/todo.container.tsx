import { useState } from "react";
import TodoListUI from "./todo.presenter";

export default function TodoList() {
  const [todo, setTodo] = useState("");

  const onClickTodoList = (event) => {
    setTodo(event.target.value);
  };

  return <TodoListUI onClickTodoList={onClickTodoList} todo={todo} />;
}
