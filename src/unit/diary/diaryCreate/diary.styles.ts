import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const DiaryWrapper = styled.div`
  width: 600px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 60px auto;
  background-color: #efefef;
  border-radius: 8px;
`;

export const Title = styled.h2`
  padding: 8px;
`;

export const Input = styled.input`
  width: 400px;
  height: 40px;
  padding: 8px;
  font-size: 18px;
  ::placeholder {
    opacity: 0.4;
  }
`;

export const Text = styled.textarea`
  width: 400px;
  height: 200px;
  padding: 8px;
  font-size: 18px;
  ::placeholder {
    opacity: 0.4;
  }
`;

export const ScoreSection = styled.section`
  display: flex;
`;

export const ScoreLabel = styled.label`
  width: 140px;
  height: 40px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ScoreList = styled.select`
  width: 260px;
  height: 40px;
`;

export const SubmitButton = styled.button`
  width: 400px;
  height: 40px;
  border: none;
  background: #fefefe;
  :hover {
    cursor: pointer;
  }
`;
