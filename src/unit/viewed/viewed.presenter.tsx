import * as S from "./viewed.styles";
import { v4 as uuidv4 } from "uuid";

export default function ViewUI(props) {
  return (
    <S.Wrapper>
      <S.Title>Items Lists</S.Title>
      <S.ListWrapper>
        {props.data?.fetchUseditems.map((el) => (
          <S.ItemWrapper key={uuidv4()}>
            <S.Img
              src={`https://storage.googleapis.com/${el.images?.[0]}`}
              onError={props.onError}
            />
            <div>{el.name}</div>
            <div>{el.price}</div>
            <S.ButtonWrapper>
              <S.Button onClick={props.onClickBasket}>Bakset</S.Button>
            </S.ButtonWrapper>
          </S.ItemWrapper>
        ))}
      </S.ListWrapper>
    </S.Wrapper>
  );
}
