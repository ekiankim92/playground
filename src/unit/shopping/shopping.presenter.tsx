import * as S from "./shopping.styles";
import { v4 as uuidv4 } from "uuid";

export default function ShoppingUI(props) {
  return (
    <S.Wrapper>
      <div> Hello World</div>
      <S.SearchWrapper>
        <S.SearchInput placeholder="search" onChange={props.onChangeKeyword} />
        <button onClick={props.onClickShoppingList}>Click Here</button>
      </S.SearchWrapper>
      {props.list.map((el) => (
        <S.ListWrapper key={uuidv4()}>
          <div>
            {el.item
              .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
              .split("@#$%")
              .map((el) => (
                <div key={uuidv4()}>{el}</div>
              ))}
          </div>
          <div>{el.color}</div>
          <div>{el.price}</div>
          <S.ShoppingImage src={el.image} />
          <div>{el.brand}</div>
          <div>{el.description}</div>
        </S.ListWrapper>
      ))}
    </S.Wrapper>
  );
}

// item, img, brand, color, description, price
