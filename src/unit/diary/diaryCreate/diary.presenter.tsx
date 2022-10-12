import * as S from "./diary.styles";

export default function DiaryUI(props) {
  return (
    <S.Wrapper>
      <S.DiaryWrapper>
        <S.Title>Today's Diary</S.Title>
        <S.Input
          name="author"
          value={props.author}
          onChange={props.onChangeState}
          placeholder="writer"
          ref={props.authorRef}
        />
        <S.Text
          name="content"
          placeholder="content"
          ref={props.lengthRef}
          onChange={props.onChangeState}
        />
        <S.ScoreSection>
          <S.ScoreLabel>Score for today :</S.ScoreLabel>
          <S.ScoreList name="emotion" onChange={props.onChangeState}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </S.ScoreList>
        </S.ScoreSection>
        <S.SubmitButton onClick={props.onClickSubmit}>
          Save Diary
        </S.SubmitButton>
      </S.DiaryWrapper>
    </S.Wrapper>
  );
}
