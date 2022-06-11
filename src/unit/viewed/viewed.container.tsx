import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../commons/types/generated/types";
import ViewUI from "./viewed.presenter";
import { FETCH_USED_ITEMS } from "./viewed.queries";
import { ChangeEvent } from "react";

export default function View() {
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  const onError = (event: ChangeEvent<HTMLImageElement>) => {
    event.target.src = "/logo.jpg";
  };

  const onClickBasket = () => {
    // const basket = JSON.parse
  };

  console.log("data:", data);

  return <ViewUI data={data} onError={onError} onClickBasket={onClickBasket} />;
}
