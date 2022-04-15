import * as S from "./shopping.styles";
import { v4 as uuidv4 } from "uuid";

export default function ShoppingUI(props) {
  return (
    <S.Wrapper>
      <div> Hello World</div>
      <button onClick={() => alert("testing")}>Click Here</button>
      {props.list.map((el) => (
        <S.ListWrapper key={uuidv4()}>
          <div>{el.item}</div>
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
