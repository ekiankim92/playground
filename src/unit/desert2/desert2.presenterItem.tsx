import {
  Wrapper,
  Title,
  ListWrapper,
  Name,
  Emoji,
  Price,
  AddButton,
  RemoveButton,
  ShoppingCart,
  Total,
} from "./desert2.styles";
import { PropsDesertUIItem2 } from "./desert2.types";

export default function DesertUIItem2(props: PropsDesertUIItem2) {
  return (
    <Wrapper>
      <Title>Desert</Title>
      <ShoppingCart>Shopping Cart: {props.total} items</ShoppingCart>
      <Total>Total: $ </Total>
      <ListWrapper>
        <Name>{props.el.name}</Name>
        <Emoji>{props.el.emoji}</Emoji>
        <Price>$ {props.el.price}</Price>
        <AddButton
          onClick={props.onClickAdd(props.el.id)}
          isTrue={props.isTrue}
          key={props.el.id}
        >
          {/* {props.isTrue ? "Added" : "Add"} */}
          {props.selectElement === props.el.id ? "Added" : "Add"}
        </AddButton>
        <RemoveButton onClick={props.onClickRemove}>Remove</RemoveButton>
      </ListWrapper>
    </Wrapper>
  );
}
