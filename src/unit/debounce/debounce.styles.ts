import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 600px;
  /* height: 600px; */
  border: 1px solid #000;
  margin: 60px auto;
`;

export const TextInput = styled.input`
  width: 260px;
  height: 40px;
  padding: 6px;
  margin: 10px;
`;

export const Pagination = styled.span`
  margin: 6px;
  /* background-color: green; */
  border: 1px solid #000;
  border-radius: 12px;
  :hover {
    cursor: pointer;
    background-color: lightcoral;
  }
`;

export const BestTitle = styled.div`
  background-color: green;
  /* display: flex; */
  /* flex-direction: row; */
  /* text-align: center; */
  justify-content: center;
  /* align-items: center; */
`;
