import * as S from "./todolist.styles";
import { PropsTodoList } from "./todolist.types";
import { v4 as uuidv4 } from "uuid";

export default function TodoListSecondUI(props: PropsTodoList) {
  return (
    <S.Wrapper>
      <S.Title>Todo List Page</S.Title>
      <S.TodoWrapper>
        <S.TodoInput
          type="text"
          placeholder="할일을 입력하세요"
          onChange={props.onChangeInputValue}
          ref={props.clearRef}
          // onKeyPress={onKeyPress}
        />
        <S.TodoButton onClick={props.onClickAddItems}>추가</S.TodoButton>
      </S.TodoWrapper>
      <S.ListTitle>Todo List</S.ListTitle>
      <S.ListWrapper>
        {props.todoList.map((el: any, index: number) => (
          <div key={uuidv4()}>
            <div>{index + 1}</div>
            <div>{el}</div>
            <div>{el.id}</div>
            <button onClick={props.onClickDeleteItems(el.id)}>Delete</button>
          </div>
        ))}
      </S.ListWrapper>
    </S.Wrapper>
  );
}
