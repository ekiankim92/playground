import { ChangeEvent, useState } from "react";
import TipCalculatorUI from "./tip.presenter";

export default function TipCalculator() {
  const [bill, setBill] = useState<Number>(0);
  const [range, setRange] = useState<string>("");
  const [tip, setTip] = useState<Number>(0);
  const [total, setTotal] = useState<Number>(0);

  const onChangeBill = (event: ChangeEvent<HTMLInputElement>) => {
    const tipAmount = Number(bill) / Number(range);

    console.log(tipAmount);

    console.log(range);

    setBill(Number(event.target.value));
    setRange(event.target.value);
    console.log("bill:", bill);
  };

  const onChangeRange = (event: ChangeEvent<HTMLInputElement>) => {
    setRange(event.target.value);
    console.log("range:", range);
  };

  return (
    <TipCalculatorUI
      //   onChangeValue={onChangeValue}
      //   onChangeTip={onChangeTip}
      //   onChangeTotal={onChangeTotal}
      onChangeBill={onChangeBill}
      onChangeRange={onChangeRange}
      range={range}
      total={total}
      tip={tip}
      bill={bill}
    />
  );
}
