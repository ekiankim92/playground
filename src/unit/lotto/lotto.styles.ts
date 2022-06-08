import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 800px;
  height: 400px;
  border: 1px solid #000;
  margin: 30px auto;
`;

export const Title = styled.h3`
  padding: 12px;
  border-bottom: 1px solid lightgray;
`;

export const LottoWrapper = styled.div`
  width: 600px;
  height: 110px;
  border: 1px solid #000;
  margin: 100px auto;
  background-color: #ebecf0;
`;

export const LottoInnerWrapper = styled.div`
  display: flex;
  margin: 16px;
`;

export const Intro = styled.section`
  text-align: center;
  background-color: #fff;
  border-bottom: 1px solid lightgray;
`;

export const NumberWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 70%;
`;

export const AdditionalNumberWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const BonusNumber = styled.p`
  font-size: 12px;
  color: gray;
  margin: 8px;
`;

export const NumberInput = styled.input`
  width: 50px;
  height: 50px;
  padding: 15px;
  border-radius: 50%;
`;

export const LotNumWrapper = styled.span`
  display: flex;
  flex-direction: column;
  /* flex-direction: column; */
  /* flex-wrap: wrap; */
  /* width: 160px; */
  /* height: 160px; */
  background-color: khaki;
`;

export const LottoNumbers = styled.span`
  margin: 10px;
  border: 1px solid #000;
`;
