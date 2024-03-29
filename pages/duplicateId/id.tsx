import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { v4 as uuidv } from "uuid";

export default function IdList({
  el,
  list,
  setList,
  setNewList,
  newList,
  idx,
}: any) {
  //   const onClickDelete = (id) => () => {
  //     const updatedList = newList.filter((item, idx) => item.id !== idx);
  //     setNewList(updatedList);
  //   };

  const onClickDelete = (index) => () => {
    const updatedList = newList.filter((_, itemIndex) => itemIndex !== index);
    setNewList(updatedList);
  };

  return (
    <>
      <Wrapper key={uuidv()} id={el.id}>
        <TableRow>{el.id}</TableRow>
        <TableRow>{el.name}</TableRow>
        <TableRow>{el.gender}</TableRow>
        <TableRow>{el.firstHeight}</TableRow>
        <TableRow>{el.secondHeight}</TableRow>
        <DeleteButton id={el.id} onClick={onClickDelete(idx)}>
          Delete
        </DeleteButton>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.table`
  width: 80%;
  display: flex;
  border: 1px solid #000;
  padding: 12px;
`;

const TableRow = styled.tr`
  display: flex;
  margin: 20px;
`;

const DeleteButton = styled.button`
  width: 120px;
  height: 40px;
  border: none;
  :hover {
    cursor: pointer;
    background: lightblue;
  }
`;
