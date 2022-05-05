import { ChangeEvent, useEffect, useState } from "react";
import TipCalculatorUI from "./tip.presenter";
import _ from "lodash";

export default function TipCalculator() {
  const [bill, setBill] = useState<Number>(0);
  const [range, setRange] = useState(0);
  const [tip, setTip] = useState<Number>(0);
  const [total, setTotal] = useState<Number>(0);
  const [test, setTest] = useState("");

  const tipAmount = (Number(bill) * (Number(range) / 100)).toFixed(2);
  const totalAmount = (Number(bill) + Number(tipAmount)).toFixed(2);

  const onChangeBill = (event: ChangeEvent<HTMLInputElement>) => {
    setBill(Number(event.target.value));
    // console.log(event.target.value);
    // console.log("bill:", bill);
  };

  const onChangeRange = (event: ChangeEvent<HTMLInputElement>) => {
    setRange(Number(event.target.value));

    // const tipAmount = Number(bill) / (Number(range) / 100);

    console.log("bill:", bill);

    console.log("range:", range);

    // console.log("tipAmount:", tipAmount);

    console.log("range:", range);
    console.log("event.target.value:", event.target.value);
  };

  const onChangeTest = (event: ChangeEvent<HTMLInputElement>) => {
    setTest(event.target.value);
    console.log("test:", test);
    console.log("event.target.value:", event.target.value);
  };

  return (
    <TipCalculatorUI
      //   onChangeValue={onChangeValue}
      //   onChangeTip={onChangeTip}
      //   onChangeTotal={onChangeTotal}
      onChangeBill={onChangeBill}
      onChangeRange={onChangeRange}
      total={total}
      tip={tip}
      bill={bill}
      test={test}
      range={range}
      onChangeTest={onChangeTest}
      tipAmount={tipAmount}
      totalAmount={totalAmount}
    />
  );
}
