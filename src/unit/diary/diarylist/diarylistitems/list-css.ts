import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
`;

export const ListWrapper = styled.div`
  border: 1px solid #000;
  height: 180px;
  margin: 20px;
`;

export const ListHeaderWrapper = styled.section`
  width: 240px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 10px;
`;

export const CreateDate = styled.div`
  opacity: 0.5;
  border-bottom: 1px solid lightgray;
  padding: 0px 0px 12px 23px;
`;

export const Contents = styled.div`
  font-size: 18px;
  margin: 23px;
  margin: 23px 0px 0px 23px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const DeleteButton = styled.button`
  width: 240px;
  height: 30px;
  border: none;
  margin: 8px 0px 0px 23px;
  :hover {
    cursor: pointer;
    border: 1px solid #000;
    opacity: 0.6;
  }
`;

export const EditButton = styled.button`
  width: 240px;
  height: 30px;
  border: none;
  margin: 8px 0px 0px 23px;
  :hover {
    cursor: pointer;
    border: 1px solid #000;
    opacity: 0.6;
  }
`;
