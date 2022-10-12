import * as S from "./list-css";

export default function DiaryListItems(props) {
  const { author, content, emotion, createdDate } = props.el;

  return (
    <S.Wrapper>
      <S.ListWrapper>
        <S.ListHeaderWrapper>
          <div>Author: {author} |</div>
          <div>Emotion Score:{emotion}</div>
        </S.ListHeaderWrapper>
        <S.CreateDate>{createdDate}</S.CreateDate>
        <S.Contents>{content}</S.Contents>
      </S.ListWrapper>
    </S.Wrapper>
  );
}
