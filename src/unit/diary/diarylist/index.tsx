import * as S from "./list-css";
import DiaryListItems from "./diarylistitems";
import { GlobalContext } from "../../../../pages/_app";
import { useContext } from "react";

export default function DiaryList(props) {
  const { isEdit, isOpen }: any = useContext(GlobalContext);

  console.log("isEdit global context:", isEdit);

  console.log("isOpen:", isOpen);

  return (
    <S.Wrapper>
      <S.Title>Diary List</S.Title>
      <h3>{props.dummyList.length} 개의 리스트가 있습니다</h3>
      {props.dummyList.map((el) => (
        <DiaryListItems
          key={el.id}
          el={el}
          onClickDelete={props.onClickDelete(el.id)}
          onClickEdit={props.onClickEdit}
        />
      ))}
    </S.Wrapper>
  );
}
