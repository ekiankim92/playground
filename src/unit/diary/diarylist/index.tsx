import * as S from "./list-css";
import DiaryListItems from "./diarylistitems";

export default function DiaryList(props) {
  return (
    <S.Wrapper>
      <S.Title>Diary List</S.Title>
      <h3>{props.dummyList.length} 개의 리스트가 있습니다</h3>
      {props.dummyList.map((el) => (
        <DiaryListItems key={el.id} el={el} />
      ))}
    </S.Wrapper>
  );
}
