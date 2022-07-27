import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1400px;
  /* height: 640px; */
  border: 1px solid #000;
  margin: 40px auto;
`;

export const Title = styled.h2`
  padding: 12px;
`;

export const FormWrapper = styled.form`
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 400px;
  height: 160px;
`;

export const ListWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 1200px;
  margin: 0px auto;
`;

export const InnerWrapper = styled.div`
  border: 1px solid #000;
  width: 240px;
  height: 140px;
  display: flex;
  flex-direction: column;
  margin: 12px;
`;
