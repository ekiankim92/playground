import * as S from "./diary.styles";

export default function DiaryUI(props) {
  return (
    <S.Wrapper>
      <S.Title>Today's Diary</S.Title>
      <input
        name="author"
        value={props.author}
        onChange={(event) => {
          props.setAuthor(event.target.value);
        }}
      />
      <textarea />
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
    </S.Wrapper>
  );
}
