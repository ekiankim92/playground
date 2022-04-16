import ShoppingUI from "./shopping.presenter";
import axios from "axios";
import { useEffect, useState } from "react";
import _ from "lodash";

export default function Shopping() {
  const [list, setList] = useState([]);
  const [keyword, setKeyword] = useState("");

  const getDebounce = _.debounce((data) => {
    setKeyword(data);
    console.log("getDebounce:", data);
  }, 500);

  const onChangeKeyword = (event) => {
    getDebounce(event.target.value);
    // console.log("keyboard:", event.target.value);
  };

  const onChangeInput = (event) => {
    setKeyword(event.target.value);
    console.log(event.target.value);
  };

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

  // const onClickShoppingList = async () => {
  //   const result = await axios.get(
  //     "https://shoppingapiacme.herokuapp.com/shopping"
  //   );
  //   setList(result.data);
  //   console.log(result.data);
  // };

  return (
    <ShoppingUI
      list={list}
      keyword={keyword}
      onChangeKeyword={onChangeKeyword}
      // onClickShoppingList={onClickShoppingList}
      onChangeInput={onChangeInput}
    />
  );
}
