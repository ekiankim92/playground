import * as S from "./tip.styles";
import { PropsTipCalculator } from "./tips.types";

export default function TipCalculatorUI(props: PropsTipCalculator) {
  return (
    <S.Wrapper>
      <S.CalculatorWrapper>
        <S.Title>Tip Calculator</S.Title>
        <input type="text" onChange={props.onChangeTest} />
        <input value={props.test} readOnly />
        <S.CostWrapper>
          <S.DollarImg src="/dollar.png/" />
          <S.CostInput
            type="text"
            placeholder="Total Bill"
            onChange={props.onChangeBill}
          />
        </S.CostWrapper>
        <S.RangeWrapper>
          <S.RangeInput
            type="range"
            min="0"
            max="100"
            onChange={props.onChangeRange}
          />
          <S.RangeSpan>{props.range}%</S.RangeSpan>
        </S.RangeWrapper>
        <S.ResultWrapper>
          <h3>Result</h3>
          <S.AmountWrapper>
            <S.AmountLabel>Tip Amount</S.AmountLabel>
            <S.AmountLabelInput type="text" value={props.tipAmount} readOnly />
          </S.AmountWrapper>
          <S.TipWrapper>
            <S.TipLabel>Total Bill with Tip</S.TipLabel>
            <S.TipLabelInput type="text" value={props.totalAmount} readOnly />
          </S.TipWrapper>
        </S.ResultWrapper>
      </S.CalculatorWrapper>
    </S.Wrapper>
  );
}
