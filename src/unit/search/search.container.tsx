// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from "react";
import SearchPageUI from "./search.presenter";

export default function Search() {
  const [keywords, setKeywords] = useState("");

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
