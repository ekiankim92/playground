import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  margin: 60px auto;
  border: 1px solid #000;
  color: ${(props) => (props.isFont ? "blue" : "red")};
`;
