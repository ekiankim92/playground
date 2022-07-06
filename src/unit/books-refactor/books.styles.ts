import styled from "@emotion/styled";
import { PropsStyles } from "./books.types";

export const Container = styled.div`
  width: 1400px;
  margin: 40px auto;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const TableHead = styled.div`
  width: 1200px;
  height: 52px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 30px auto 0px auto;
  font-weight: 600;
  background-color: #dedede;
`;

export const TableData = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 52px;
  border-bottom: 1px solid #dedede;
  :hover {
    opacity: 0.5;
  }
`;

export const RentButton = styled.button`
  background-color: ${(props: PropsStyles) =>
    props.id === props.elementId ? "red" : "#fefefe"};
`;
