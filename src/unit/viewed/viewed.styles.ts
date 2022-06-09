import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1400px;
  border: 1px solid #000;
  margin: 20px auto;
`;

export const Title = styled.h2`
  padding: 12px;
`;

export const ListWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const ItemWrapper = styled.div`
  width: 280px;
  height: 300px;
  margin: 18px;
  border: 1px solid #000;
`;

export const Img = styled.img`
  width: 100%;
  height: 180px;
  border-bottom: 1px solid lightgray;
  object-fit: fill;
  :hover {
    /* object-fit: contain; */
    opacity: 0.8;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 80px;
`;

export const Button = styled.button`
  width: 100%;
  height: 24px;
  border: none;
  border-bottom: 1px solid #000;
  :hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;
