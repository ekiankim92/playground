import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #000;
  margin: 0px auto;
`;

const Props1 = (props) => {
  return (
    <Wrapper>
      <h2>This is first props page</h2>
      <button onClick={props.onClickCount}>Increase</button>
    </Wrapper>
  );
};
export default Props1;
