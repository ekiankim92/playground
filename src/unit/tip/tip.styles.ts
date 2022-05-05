import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  border: 1px solid #000;
  margin: 60px auto;
`;

export const CalculatorWrapper = styled.div`
  border: 1px solid #000;
  width: 520px;
  height: 520px;
  margin: 30px auto;
`;

export const Title = styled.h2`
  margin: 12px;
  text-decoration: underline;
  text-align: center;
`;

export const CostWrapper = styled.div`
  display: flex;
  margin: 20px;
  padding: 12px;
  /* background-color: green; */
`;

export const DollarImg = styled.img`
  width: 24px;
  height: 36px;
  /* border: 1px solid #000; */
  border: none;
  background-color: lightgray;
`;

export const CostInput = styled.input`
  width: 100%;
  height: 36px;
  /* border: none; */
  border: 1px solid lightgray;
  padding: 10px;
  ::placeholder {
    opacity: 0.6;
  }
  :focus {
    outline: none;
    border: 1px solid gray;
  }
`;

export const RangeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RangeInput = styled.input`
  width: 280px;
  height: 36px;
`;

export const RangeSpan = styled.span`
  width: 26px;
  height: 26px;
  padding: 2px;
`;

export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

export const AmountWrapper = styled.div`
  display: flex;
  width: 420px;
  margin-bottom: 22px;
`;

export const AmountLabel = styled.label`
  font-size: 16px;
  width: 140px;
  height: 40px;
  text-align: center;
  padding: 8px;
  border: 1px solid lightgray;
`;

export const AmountLabelInput = styled.input`
  /* width: 100%; */
  width: 420px;
  border: 1px solid lightgray;
  :focus {
    outline: none;
    border: 1px solid gray;
  }
`;

export const TipWrapper = styled.div`
  display: flex;
  width: 480px;
`;

export const TipLabel = styled.label`
  font-size: 12px;
  width: 140px;
  height: 40px;
  text-align: center;
  padding: 12px;
  border: 1px solid lightgray;
`;

export const TipLabelInput = styled.input`
  width: 420px;
  border: 1px solid lightgray;
  :focus {
    outline: none;
    border: 1px solid gray;
  }
`;
