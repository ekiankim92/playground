import { useEffect, useState } from "react";
import DesertUI2 from "./desert2.presenter";

const products = [
  { id: 1, emoji: "🍨", name: "Ice Cream", price: 5 },
  { id: 2, emoji: "🍩", name: "Donut", price: 2.5 },
  { id: 3, emoji: "🍊", name: "Orange", price: 4 },
];

export default function Desert2() {
  const [cart, setCart] = useState([]);

  // need to try the useReducer
  const [total, setTotal] = useState(0);

  const [isTrue, setIsTrue] = useState(false);

  const [selectElement, setSelectElement] = useState(0);

  const onClickAdd = (id: string) => () => {
    setTotal((prev) => prev + 1);

    const result = cart.filter((el) => el.id === id);

    if (result) setIsTrue((prev) => !prev);

    // console.log("id:", id);

    // console.log("result:", result);
    setSelectElement(Number(id));
  };

  const onClickRemove = () => {
    setTotal((prev) => prev - 1);

    if (total <= 0) {
      setTotal(0);
    }
  };

  useEffect(() => {
    setCart(products);
  });

  return (
    <DesertUI2
      cart={cart}
      total={total}
      onClickAdd={onClickAdd}
      onClickRemove={onClickRemove}
      isTrue={isTrue}
      selectElement={selectElement}
    />
  );
}
