import * as S from "./filter.styles";
import { PropsFilter } from "./filter.types";
import { v4 as uuidv4 } from "uuid";

export default function FilterUI(props: PropsFilter) {
  return (
    <>
      <S.Container>
        <S.Title>Ascending and Descending</S.Title>
        <S.SubmitWrapper>
          <S.SubmitTitle>Submit</S.SubmitTitle>
          <S.NameInput
            placeholder="name"
            name="name"
            onChange={props.onChangeScore}
            ref={props.clearNameRef}
          />
          <S.KoreanInput
            placeholder="korean score"
            name="kscore"
            onChange={props.onChangeScore}
            ref={props.clearKScore}
          />
          <S.MathInput
            placeholder="math score"
            name="mscore"
            onChange={props.onChangeScore}
            ref={props.clearMScore}
          />
          <S.EnglishInput
            placeholder="english score"
            name="escore"
            onChange={props.onChangeScore}
            ref={props.clearEScore}
          />
          <S.SubmitButton onClick={props.onClickSubmit}>Submit</S.SubmitButton>
        </S.SubmitWrapper>
        <S.TableHeader>
          <S.NameHeader>Name</S.NameHeader>
          <S.KscoreHeader>Korean Score</S.KscoreHeader>
          <S.MscoreHeader>Math Score</S.MscoreHeader>
          <S.EscoreHeader>English Store</S.EscoreHeader>
        </S.TableHeader>
        <S.TableDate>
          <S.NameData>Jim Green</S.NameData>
          <S.KoreanData>88</S.KoreanData>
          <S.MathData>66</S.MathData>
          <S.EnglishData>70</S.EnglishData>
        </S.TableDate>
        <S.ListDataWrapper>
          <S.ListNameWrapper>
            {props.listNames.map((el) => (
              <div key={uuidv4()}>
                <S.ListNameElement>{el}</S.ListNameElement>
              </div>
            ))}
          </S.ListNameWrapper>
          <S.ListKScoreWrapper>
            {props.listKScore.map((el, index) => (
              <S.ListKScoreElement key={index}>{el}</S.ListKScoreElement>
            ))}
          </S.ListKScoreWrapper>
          <S.ListMScoreWrapper>
            {props.listMScore.map((el, index) => (
              <S.ListMScoreElement key={index}>{el}</S.ListMScoreElement>
            ))}
          </S.ListMScoreWrapper>
          <S.ListEScoreWrapper>
            {props.listEScore.map((el, index) => (
              <S.ListEscoreElement key={index}>{el}</S.ListEscoreElement>
            ))}
          </S.ListEScoreWrapper>
        </S.ListDataWrapper>
      </S.Container>
    </>
  );
}
