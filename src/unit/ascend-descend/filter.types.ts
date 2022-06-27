import { ChangeEvent, MutableRefObject } from "react";

export interface PropsFilter {
  onChangeScore: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  listNames: string[];
  listKScore: string[];
  listMScore: string[];
  listEScore: string[];
  clearNameRef: MutableRefObject<HTMLInputElement>;
  clearKScore: MutableRefObject<HTMLInputElement>;
  clearMScore: MutableRefObject<HTMLInputElement>;
  clearEScore: MutableRefObject<HTMLInputElement>;
}
