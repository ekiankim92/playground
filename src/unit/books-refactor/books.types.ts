export interface PropsBooksUI {
  booksList: string[];
  elementId: string;
  onClickRent: (id: string, index: number) => () => void;
  isRent: boolean;
}

export interface PropsBooksUIItems {
  el: any;
  index: number;
  elementId?: string;
  onClickRent: () => void;
  isRent: boolean;
}

export interface PropsStyles {
  elementId?: string;
  id: string;
  isRent: boolean;
}
