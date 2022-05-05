import { ChangeEvent } from "react";

export interface PropsTipCalculator {
  range: String;
  total: Number;
  tip: Number;
  bill: Number;
  onChangeRange: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTip: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTotal: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeBill: (event: ChangeEvent<HTMLInputElement>) => void;
}
