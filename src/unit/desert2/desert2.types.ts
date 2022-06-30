export interface PropsDesert {
  cart: string[] | number[];
  total: number;
  price: number;
  onClickAdd: () => void;
  onClickRemove: () => void;
  isTrue: boolean;
}

export interface PropsIsTrue {
  isTrue: boolean;
}

export interface PropsDesert2 {
  cart: string[] | number[];
  el?: any;
  onClickAdd: (id: string) => () => void;
  onClickRemove: () => void;
  total: number;
  isTrue: boolean;
  selectElement: number;
}

export interface PropsDesertUIItem2 {
  el?: any;
  onClickAdd: (id: string) => () => void;
  onClickRemove: () => void;
  isTrue: boolean;
  total: number;
  selectElement: number;
}
