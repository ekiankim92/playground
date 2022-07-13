export interface PropsTabsUI {
  isBasic: boolean;
  isSmart: boolean;
  isGold: boolean;
  isAll: boolean;
  onClickBasic: () => void;
  onClickSmart: () => void;
  onClickGold: () => void;
  onClickAll: () => void;
  basicList: any;
  smartList: any;
  goldList: any;
  allList: any;
}

export interface PropsTabsUIItems {
  isBasic: boolean;
  isSmart: boolean;
  isGold: boolean;
  isAll: boolean;
  onClickBasic: () => void;
  onClickSmart: () => void;
  onClickGold: () => void;
  onClickAll: () => void;
  basicList: (string | number)[];
  smartList: (string | number)[];
  goldList: (string | number)[];
  allList: (string | number)[];
}

export interface PropsColors {
  isBasic?: boolean;
  isSmart?: boolean;
  isGold?: boolean;
  isAll?: boolean;
}
