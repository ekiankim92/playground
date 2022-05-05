import { ChangeEvent } from "react";

export interface PropsTipCalculator {
  range: Number;
  total: Number;
  tip: Number;
  bill: Number;
  test?: string;
  tipAmount: number | string;
  totalAmount: number | string;
  onChangeRange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTip?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTotal?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeBill?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTest?: (event) => void;
}
