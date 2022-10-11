import { useEffect, useState } from "react";
import DiaryUI from "./diary.presenter";

export default function Diary() {
  const [state, setState] = useState({
    author: "",
    content: "",
  });

  const onChangeState = (event) => {
    setState({
      ...state, // the actual order matters
      [event.target.name]: event.target.value, // this change will override the previous state
    });
  };

  useEffect(() => {
    const lanauge = window.navigator.language;
    const result = navigator.language;
    console.log("result:", result);
    console.log("language:", lanauge);
    console.log(lanauge.slice(0, 2));
    if (lanauge === "en") {
      console.log("it is english");
    }
    // localStorage.setItem("language", JSON.stringify(lanauge.slice(0, 2)));
  }, []);

  return (
    <DiaryUI state={state} setState={setState} onChangeState={onChangeState} />
  );
}
