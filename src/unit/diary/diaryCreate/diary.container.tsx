import { useEffect, useRef, useState } from "react";
import DiaryUI from "./diary.presenter";

export default function Diary(props) {
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
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

  // useEffect(() => {
  //   if (typeof window !== undefined) {
  //     focusRef.current.focus();
  //   }
  // }, []);

  const onClickSubmit = () => {
    const { author, content, emotion } = state;
    console.log("state:", state);

    // if (!author || !content) {
    //   return alert("please enter information");
    // }

    if (author.length < 3) {
      authorRef.current.focus();
      return;
    }

    if (content.length < 5) {
      lengthRef.current.focus();
      return;
    }

    props.onCreateDiary(author, content, emotion);
    alert("saved diary");
    authorRef.current.value = "";
    lengthRef.current.value = "";
  };

  useEffect(() => {
    console.log("DiaryEditor Container Render!!!");
  });

  return (
    <DiaryUI
      state={state}
      setState={setState}
      onChangeState={onChangeState}
      focusRef={focusRef}
      lengthRef={lengthRef}
      authorRef={authorRef}
      onClickSubmit={onClickSubmit}
    />
  );
}
