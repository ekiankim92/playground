// eslint-disable-next-line no-use-before-define
import React, { useContext, useEffect, useState } from "react";
import SearchPageUI from "./search.presenter";
import { GlobalContext } from "../../../pages/_app";

export default function Search() {
  const [keywords, setKeywords] = useState("");
  const { isContext } = useContext(GlobalContext);

  console.log("isContext:", isContext);

  useEffect(() => {
    localStorage.setItem("keywords", JSON.stringify(keywords));
  }, [keywords]);

  const onClickAddKeywords = (value) => {
    console.log("text:", value);
    // const newKeywords = {
    //   id: Date.now(),
    //   text: value,
    // };
  };

  return (
    <SearchPageUI keywords={keywords} onClickAddKeywords={onClickAddKeywords} />
  );
}
