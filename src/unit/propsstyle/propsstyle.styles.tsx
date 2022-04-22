import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  margin: 60px auto;
  border: 1px solid #000;
`;

export const Text = styled.div`
  width: 240px;
  height: 40px;
  border: 1px solid #000;
  color: ${(props) => (props.isFont ? "khaki" : "lightcoral")};
`;

export const SecondWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SecondText = styled.div`
  width: 340px;
  height: 40px;
  border: 1px solid #000;
  color: ${(props) => (props.isTrue ? "blue" : "red")};
  background-color: ${(props) => (props.isTrue ? "yellow" : "green")};
`;

export const InfoInput = styled.input`
  width: 240px;
  height: 30px;
  padding: 6px;
  /* margin: 6px; */
  ::placeholder {
    opacity: 0.6;
  }
`;

export const SubmitButton = styled.button`
  width: 240px;
  height: 30px;
`;
