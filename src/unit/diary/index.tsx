import Diary from "./diaryCreate/diary.container";
import DiaryList from "./diarylist";
import { useState, useRef } from "react";

const DiaryMain = () => {
  const dummyList = [
    {
      id: 1,
      author: "Ian",
      content: "Hello World",
      emotion: 2,
      createdDate: new Date().toISOString().slice(0, 10),
    },
    {
      id: 2,
      author: "Grace",
      content: "Today is the day for a new",
      emotion: 5,
      createdDate: new Date().toISOString().slice(0, 10),
    },
    {
      id: 3,
      author: "Alex",
      content: "I am not feeling really well..",
      emotion: 1,
      createdDate: new Date().toISOString().slice(0, 10),
    },
  ];

  const [list, setList] = useState([]);

  const dataId = useRef(0);

  const onCreateDiary = (author: string, content: string, emotion: number) => {
    const createdDate = new Date().toISOString().slice(0, 10);
    const newItems = {
      author,
      content,
      emotion,
      createdDate,
      id: dataId.current,
    };
    dataId.current += 1;
    setList([newItems, ...list]);
  };

  return (
    <>
      <Diary onCreateDiary={onCreateDiary} />
      <DiaryList dummyList={list} />
    </>
  );
};
export default DiaryMain;
