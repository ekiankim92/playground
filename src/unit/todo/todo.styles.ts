import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1000px;
  border: 1px solid #000;
  margin: 0px auto;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const TodoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TodoInput = styled.input`
  width: 500px;
  height: 44px;
  padding: 12px;
  :focus {
    outline: none;
    border: 1px solid #add8e6;
  }
  ::placeholder {
    opacity: 0.4;
  }
`;

export const TodoButton = styled.input`
  color: #fff;
  width: 60px;
  height: 44px;
  border: none;
  margin-left: 16px;
  background-color: #add8e6;
`;

export const ListTitle = styled.h3`
  width: 50%;
  color: #add8e6;
  text-align: center;
`;
