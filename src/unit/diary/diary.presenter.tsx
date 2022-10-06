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
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </select>
    </S.Wrapper>
  );
}
