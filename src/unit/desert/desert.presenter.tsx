import {
  Wrapper,
  Title,
  CartWrapper,
  ListWrapper,
  Name,
  Emoji,
  Price,
  AddButton,
  RemoveButton,
  ShoppingCart,
  Total,
} from "./desert.styles";
import { PropsDesert } from "./desert.types";

export default function DesertUIItem(props: PropsDesert) {
  return (
    <Wrapper>
      <Title>Desert</Title>
      <ShoppingCart>Shopping Cart: {props.total} items</ShoppingCart>
      <Total>Total: $ {props.price.toFixed(2)}</Total>
      <ListWrapper>
        {props.cart.map((el: any, index: number) => (
          <CartWrapper key={index}>
            <Name>{el.name}</Name>
            <Emoji>{el.emoji}</Emoji>
            <Price>$ {el.price.toFixed(2)}</Price>
            <AddButton onClick={props.onClickAdd(el.id)} isTrue={props.isTrue}>
              Add
            </AddButton>
            <RemoveButton onClick={props.onClickRemove(el.id)}>
              Remove
            </RemoveButton>
          </CartWrapper>
        ))}
      </ListWrapper>
    </Wrapper>
  );
}
