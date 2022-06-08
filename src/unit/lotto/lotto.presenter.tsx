import Lotto from "./lotto.container";
import * as S from "./lotto.styles";
import { v4 as uuidv } from "uuid";

export default function LottoUI(props) {
  return (
    <S.Wrapper>
      <S.Title>Lottery Page</S.Title>
      <S.LottoWrapper>
        <S.Intro>
          {"< "}872회차 당첨번호 2022.06.08{" >"}
        </S.Intro>
        <S.LottoInnerWrapper>
          <S.NumberWrapper>
            {new Array(6).fill(1).map((index) => (
              <S.NumberInput key={uuidv()} value={props.numbers} readOnly />
            ))}
          </S.NumberWrapper>
          <S.AdditionalNumberWrapper>
            <S.BonusNumber>+ 보너스 숫자</S.BonusNumber>
            <S.NumberInput />
          </S.AdditionalNumberWrapper>
        </S.LottoInnerWrapper>
        <div>============================================================</div>
        <S.NumberInput name="first" value={props.first} />
        <S.NumberInput name="second" value={props.second} />
        <S.NumberInput name="third" value={props.third} />
        <S.NumberInput name="fourth" value={props.fourth} />
        <S.NumberInput name="fifth" />
        <S.NumberInput name="sixth" />
        <div>============================================================</div>
        <div>
          <S.NumberInput name="uno" onChange={props.pressNumbers} />
          <S.NumberInput name="dos" onChange={props.pressNumbers} />
          <S.NumberInput name="tres" onChange={props.pressNumbers} />
          <S.NumberInput name="quatro" onChange={props.pressNumbers} />
          <S.NumberInput />
          <S.NumberInput />
        </div>
      </S.LottoWrapper>
      <div>
        {/* <button onClick={props.pressNumbers}>Press Here</button> */}
        <button onClick={props.numberGenerator}>Click Here</button>
      </div>
      <div>============================================================</div>
      <button onClick={props.generateRandomNumbers}>Number Generator</button>
      {props.lotto.map((el) => (
        // <S.LotNumWrapper key={uuidv()}>
        <S.LottoNumbers key={uuidv()}>{el}</S.LottoNumbers>
        // </S.LotNumWrapper>
      ))}
    </S.Wrapper>
  );
}
