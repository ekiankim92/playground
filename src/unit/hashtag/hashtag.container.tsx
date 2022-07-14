import { useState } from "react";
import HashTagUI from "./hashtag.presenter";

export default function HashTag() {
  const [hashtags, setHashtags] = useState([]);
  const [keywords, setKeywords] = useState("");
  const [list, setList] = useState([]);
  const [words, setWords] = useState("");

  const onClickAdd = () => {
    setHashtags([...hashtags, keywords]);
  };

  const onChangeHashtags = (event) => {
    setKeywords(event.target.value);
  };

  const onChangeWords = (event) => {
    setWords(event.target.value);
  };

  const onClickAddList = () => {
    setList([...list, words]);
  };

  const onKeyPress = (event) => {
    console.log(event.target.value);
    if (event.key === "Enter" && event.target.value !== "") {
      setHashtags([...hashtags, `#${event.target.value}`]);
      event.target.value = "";
    }
  };

  const onClickDeleteHashtags = (index) => () => {
    // console.log("index:", index);
    hashtags.splice(index, 1);
    setHashtags([...hashtags]);
  };

  return (
    <HashTagUI
      onClickAdd={onClickAdd}
      hashtags={hashtags}
      onChangeHashtags={onChangeHashtags}
      list={list}
      onChangeWords={onChangeWords}
      onClickAddList={onClickAddList}
      onKeyPress={onKeyPress}
      onClickDeleteHashtags={onClickDeleteHashtags}
    />
  );
}
