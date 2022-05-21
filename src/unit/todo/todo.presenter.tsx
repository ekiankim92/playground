import { useState } from "react";
import * as S from "./todo.styles";
import { PropsTodoList } from "./todo.types";

export default function TodoListUI(props: PropsTodoList) {
  const [hide, setHide] = useState(false);

  const onClickHide = () => {
    setHide(true);
  };

  return (
    <S.Wrapper hide={hide}>
      <S.HideButton onClick={onClickHide}>Make It Disappear</S.HideButton>
      <S.Title>Todo List Page</S.Title>
      <S.TodoWrapper>
        <S.TodoInput
          type="text"
          placeholder="할일을 입력하세요"
          onChange={props.onChangeList}
          ref={props.clearRef}
        />
        <S.TodoButton onClick={props.onClickTodoList}>추가</S.TodoButton>
      </S.TodoWrapper>
      <S.ListTitle>Todo List</S.ListTitle>
      <S.ListWrapper>
        <div>This is the todo list</div>
        <div>{props.todo}</div>
        <div>{props.list}</div>
        {/* {props.list.map((el, index) => (
          <>
            <div key={index}>{el}</div>
            <button>Delete</button>
          </>
        ))} */}
      </S.ListWrapper>
    </S.Wrapper>
  );
}
