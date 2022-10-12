import { useEffect, useRef, useState } from "react";
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

  const focusRef = useRef(null);
  const lengthRef = useRef(null);
  const authorRef = useRef(null);

  useEffect(() => {
    if (typeof window !== undefined) {
      focusRef.current.focus();
    }
  }, []);

  const onClickSubmit = () => {
    const { author, content } = state;
    console.log("state:", state);

    // if (!author || !content) {
    //   return alert("please enter information");
    // }

    if (author.length < 3) {
      lengthRef.current.value = "";
      lengthRef.current.focus();
      return;
    }

    if (content.length < 5) {
      authorRef.current.value = "";
      authorRef.current.focus();
      return;
    }

    return alert("saved diary");
  };

  return (
    <DiaryUI
      state={state}
      setState={setState}
      onChangeState={onChangeState}
      focusRef={focusRef}
      lengthRef={lengthRef}
      onClickSubmit={onClickSubmit}
    />
  );
}
