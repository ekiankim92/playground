import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #000;
  margin: 30px auto;
`;

const Props2 = ({ onClickCount }) => {
  return (
    <Wrapper>
      <h2>This is second props page</h2>
      <button onClick={onClickCount}>Increase</button>
    </Wrapper>
  );
};
export default Props2;
