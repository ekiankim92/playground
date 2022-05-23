import { useEffect, useState } from "react";
import BasketUI from "./basket.presenter";

export default function Basket() {
  const [basketItems, setBasketItems] = useState([]);

  const onClickBasket = (el) => () => {
    console.log(el);
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");

    let isExists = false;
    baskets.forEach((basketEl) => {
      if (el._id === basketEl._id) isExists = true;
    });
    if (isExists) {
      alert("You Have Already Placed In The Basket");
      return;
    } else if (!isExists) {
      alert("You Have Added An Item To The Cart");
    }
    // rest parameter to pick what we can see. newEl is the new parameter's name
    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    // placing into the local storage
    localStorage.setItem("basket", JSON.stringify(baskets));
  };

  const onClickDelete = (id: string) => () => {
    alert("delete");
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    const newBasket = baskets.filter((el: any) => el._id !== id);
    localStorage.setItem("basket", JSON.stringify(newBasket));
    setBasketItems(newBasket);
    alert("Your Item Has Been Deleted");
  };

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    setBasketItems(baskets);
  }, []);

  return (
    <BasketUI
      onClickBasket={onClickBasket}
      onClickDelete={onClickDelete}
      basketItems={basketItems}
    />
  );
}
