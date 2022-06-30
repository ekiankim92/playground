import { useEffect, useState } from "react";
import DesertUI from "./desert.presenter";

const products = [
  { id: 1, emoji: "🍨", name: "Ice Cream", price: 5 },
  { id: 2, emoji: "🍩", name: "Donut", price: 2.5 },
  { id: 3, emoji: "🍊", name: "Orange", price: 4 },
];

export default function Desert() {
  const [cart, setCart] = useState([]);

  // need to try the useReducer
  const [total, setTotal] = useState(0);

  const [price, setPrice] = useState(0);

  const [isTrue, setIsTrue] = useState(false);

  const onClickAdd = (id: string) => () => {
    setTotal((prev) => prev + 1);

    switch (Number(id)) {
      case 1:
        setPrice((prev) => prev + products[0].price);
        break;
      case 2:
        setPrice((prev) => prev + products[1].price);
        break;
      case 3:
        setPrice((prev) => prev + products[2].price);
        break;
      default:
        throw new Error("there is no ID");
    }

    console.log("price:", price);

    if (price >= 5) {
      setIsTrue(true);
    }
  };

  const onClickRemove = (id: string) => () => {
    setTotal((prev) => prev - 1);

    if (total <= 0) {
      return setTotal(0);
    }

    switch (Number(id)) {
      case 1:
        setPrice((prev) => prev - products[0].price);
        break;
      case 2:
        setPrice((prev) => prev - products[1].price);
        break;
      case 3:
        setPrice((prev) => prev - products[2].price);
        break;
      default:
        throw new Error("there is no ID");
    }

    if (price <= 5) {
      setIsTrue(false);
    }
  };

  useEffect(() => {
    setCart(products);
  });

  return (
    <DesertUI
      cart={cart}
      total={total}
      price={price}
      onClickAdd={onClickAdd}
      onClickRemove={onClickRemove}
      isTrue={isTrue}
    />
  );
}
