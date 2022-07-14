import styled from "@emotion/styled";

export const Container = styled.div`
  width: 800px;
  border: 1px solid #000;
  margin: 20px auto;
`;

export const Title = styled.h2`
  padding: 12px;
`;

export const HashInput = styled.input`
  width: 320px;
  height: 40px;
  padding: 6px;
  ::placeholder {
    opacity: 0.4;
  }
`;

export const AddButton = styled.button`
  width: 220px;
  height: 40px;
  border: none;
  :hover {
    cursor: pointer;
  }
`;

export const HashtagsWrapper = styled.div`
  margin: 16px;
  display: flex;
  flex-wrap: wrap;
`;

export const Hashtags = styled.div`
  width: 88px;
  height: 24px;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 32px;
  margin: 4px;
  background-color: #dedede;
  :hover {
    background-color: #fefefe;
  }
`;
