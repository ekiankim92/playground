import ShoppingUI from "./shopping.presenter";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Shopping() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const ShoppingList = async () => {
      const result = await axios.get(
        "https://shoppingapiacme.herokuapp.com/shopping"
      );
      // .then((response) => response.data)
      // .catch((error) => console.log(error));
      setList(result.data);
      //   setList(response.daata);
      console.log(result.data);
    };
    ShoppingList();
  }, []);

  return <ShoppingUI list={list} />;
}
