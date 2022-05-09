import { ChangeEvent } from "react";

export interface IPropsScroll {
  data?: any;
  onLoadMore: () => void;
  onError: (event: ChangeEvent<HTMLImageElement>) => void;
}
