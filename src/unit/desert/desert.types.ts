export interface PropsDesert {
  cart: string[] | number[];
  total: number;
  price: number;
  onClickAdd: (id: string) => () => void;
  onClickRemove: (id: string) => () => void;
  isTrue: boolean;
}

export interface PropsIsTrue {
  isTrue: boolean;
}
