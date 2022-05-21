import * as S from "./todolist.styles";
import { PropsTodoList } from "./todolist.types";

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
        />
        <S.TodoButton onClick={props.onClickAddItems}>추가</S.TodoButton>
      </S.TodoWrapper>
      <S.ListTitle>Todo List</S.ListTitle>
      <S.ListWrapper>
        {props.todoList.map((el, index) => (
          <div key={el.id}>
            <div>{index + 1}</div>
            <div>{el}</div>
            <button onClick={props.onClickDeleteItems}>Delete</button>
          </div>
        ))}
      </S.ListWrapper>
    </S.Wrapper>
  );
}
