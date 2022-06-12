import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../commons/types/generated/types";
import ViewUI from "./viewed.presenter";
import { FETCH_USED_ITEMS, FETCH_USED_BEST_ITEMS } from "./viewed.queries";
import { ChangeEvent, useEffect, useState } from "react";

export default function View() {
  const [basketItem, setBasketItem] = useState([]);
  const [recentView, setRecentView] = useState(["", "", ""]);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  const { data: bestItemData } = useQuery<
    Pick<IQuery, "fetchUseditemsOfTheBest">
  >(FETCH_USED_BEST_ITEMS);

  const onError = (event: ChangeEvent<HTMLImageElement>) => {
    event.target.src = "/logo.jpg";
  };

  const onClickBasket = (el) => () => {
    console.log("el:", el);

    const basket = JSON.parse(localStorage.getItem("basket") || "[]");

    let isExist = false;

    basket.forEach((basketEl) => {
      if (el._id === basketEl._id) {
        isExist = true;
      }
    });

    if (isExist) {
      alert("You have already placed the item in the basket");
      return;
    } else if (!isExist) {
      alert("You have added an item to the cart");
    }

    const { __typename, ...newEl } = el;
    basket.push(newEl);

    localStorage.setItem("basket", JSON.stringify(basket));
  };

  console.log("data:", data);
  console.log("bestItemData:", bestItemData);

  useEffect(() => {
    const getBasket = JSON.parse(localStorage.getItem("basket") || "[]");
    setBasketItem(getBasket);
  }, [data]);

  const onClickDelete = (id) => () => {
    alert("Item has been deleted");
    const basket = JSON.parse(localStorage.getItem("basket") || "[]");
    const newBasket = basket.filter((el) => el._id !== id);
    localStorage.setItem("basket", JSON.stringify(newBasket));
    setBasketItem(newBasket);
  };

  useEffect(() => {
    const getBasket = JSON.parse(localStorage.getItem("basket") || "[]");
    setRecentView(getBasket);
    // recentView.splice(0, 2);
    if (getBasket.length > 2) {
      localStorage.setItem("basket", JSON.stringify(getBasket.slice(0, 3)));
    }
  }, []);

  return (
    <ViewUI
      data={data}
      onError={onError}
      onClickBasket={onClickBasket}
      bestItemData={bestItemData}
      basketItem={basketItem}
      onClickDelete={onClickDelete}
      recentView={recentView}
    />
  );
}
