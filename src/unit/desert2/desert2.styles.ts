import styled from "@emotion/styled";
import { PropsIsTrue } from "./desert2.types";

export const Wrapper = styled.div`
  width: 1200px;
  border: 2px solid #000;
  margin: 30px auto;
`;

export const Title = styled.h2`
  padding: 12px;
`;

export const ShoppingCart = styled.h3``;

export const Total = styled.h3``;

export const ListWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const CartWrapper = styled.div`
  border: 1px solid #ededed;
  width: 260px;
  height: 260px;
`;

export const Name = styled.div`
  font-size: 20px;
  padding: 6px;
`;

export const Emoji = styled.div`
  font-size: 96px;
  text-align: center;
  border-bottom: 1px solid #dedede;
`;

export const Price = styled.div`
  font-size: 20px;
  padding: 6px;
`;

export const AddButton = styled.button`
  width: 129px;
  padding: 6px;
  margin-top: 16px;
  background-color: ${(props: PropsIsTrue) => (props.isTrue ? "blue" : "")};
`;

export const RemoveButton = styled.button`
  width: 129px;
  padding: 6px;
`;
