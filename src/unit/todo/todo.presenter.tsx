import * as S from "./todo.styles";

export default function TodoListUI() {
  return (
    <S.Wrapper>
      <S.Title>Todo List Page</S.Title>
      <S.TodoWrapper>
        <S.TodoInput type="text" placeholder="할일을 입력하세요" />
        <S.TodoButton type="button" value="추가" />
      </S.TodoWrapper>
      <S.ListTitle>Todo List</S.ListTitle>
    </S.Wrapper>
  );
}
