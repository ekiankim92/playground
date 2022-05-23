import * as S from "./basket.styles";
import { v4 as uuidv4 } from "uuid";

export default function BasketUI(props) {
  return (
    <S.Wrapper>
      <S.Title>Basket</S.Title>
      <S.MainWrapper>
        {new Array(20).fill(1).map((el, index) => (
          <S.ArrayWrapper key={uuidv4()}>
            <span>{index + 1}</span>
            <div>Basket</div>
            <button onClick={props.onClickBasket(el.id)}>Add to Basket</button>
            <button onClick={props.onClickDelete}>Delete Basket</button>
          </S.ArrayWrapper>
        ))}
      </S.MainWrapper>
    </S.Wrapper>
  );
}
