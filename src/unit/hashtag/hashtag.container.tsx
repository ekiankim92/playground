import { useState } from "react";
import HashTagUI from "./hashtag.presenter";

export default function HashTag() {
  const [hashtags, setHashtags] = useState([]);

  const onClickAdd = () => {
    alert("testing");
  };

  return <HashTagUI onClickAdd={onClickAdd} hashtags={hashtags} />;
}
