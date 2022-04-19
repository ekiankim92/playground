import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  border: 1px solid #000;
  margin: 60px auto;
`;

const Test1 = styled.div`
  border-top: 1px solid #000;
  /* border-top-width: 4px; */
  margin: 20px;
`;

export default function Border() {
  return (
    <Wrapper>
      <div>Hello World</div>
      <Test1>This is the real test</Test1>
    </Wrapper>
  );
}
