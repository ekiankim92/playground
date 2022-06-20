export interface PropsRanking {
  rankList: string[];
  newList: string[];
  el?: string;
  onClickDetailedSuzy: () => void;
  onClickDetailedIU: () => void;
  onClickDetail: (id: string) => () => void;
}
