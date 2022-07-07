import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1400px;
  border: 1px solid #000;
  margin: 40px auto;
`;

export const Title = styled.h2`
  padding: 12px;
  text-align: center;
`;

export const Container = styled.div`
  width: 320px;
  border: 1px solid #000;
  margin: 20px auto;
`;

export const Label = styled.label`
  margin-right: 8px;
`;

export const NameWrapper = styled.div`
  width: 360px;
  display: flex;
  align-items: center;
  padding: 8px;
`;

export const AuthorWrapper = styled.div`
  width: 360px;
  display: flex;
  align-items: center;
  padding: 8px;
`;

export const RentButton = styled.button`
  border: none;
  width: 100%;
  height: 40px;
  :hover {
    cursor: pointer;
  }
`;
