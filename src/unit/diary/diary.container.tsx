import { useState } from "react";
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

  return (
    <DiaryUI state={state} setState={setState} onChangeState={onChangeState} />
  );
}
