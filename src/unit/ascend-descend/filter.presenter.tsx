import * as S from "./filter.styles";

export default function FilterUI() {
  return (
    <>
      <S.Container>
        <S.Title>Ascending and Descending</S.Title>
        <S.SubmitWrapper>
          <S.SubmitTitle>Submit</S.SubmitTitle>
          <S.NameInput placeholder="name" />
          <S.KoreanInput placeholder="korean score" />
          <S.MathInput placeholder="math score" />
          <S.EnglishInput placeholder="english score" />
        </S.SubmitWrapper>
        <S.TableHeader>
          <span>Name</span>
          <span>Korean Score</span>
          <span>Math Score</span>
          <span>English Store</span>
        </S.TableHeader>
        <S.TableDate>
          <S.NameData>Jim Green</S.NameData>
          <S.KoreanData>88</S.KoreanData>
          <S.MathData>66</S.MathData>
          <S.EnglishData>70</S.EnglishData>
        </S.TableDate>
      </S.Container>
    </>
  );
}
