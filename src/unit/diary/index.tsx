import Diary from "./diaryCreate/diary.container";
import DiaryList from "./diarylist";
import DiaryCycle from "./diaryCycle";
import { useState, useRef, useEffect, useMemo } from "react";

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

  const onClickDelete = (id) => () => {
    if (window.confirm(`${id} delete?`)) {
      const newDiaryList = list.filter((el) => el.id !== id);
      setList(newDiaryList);
    }
  };

  const onClickEdit = (targetId, newContent) => {
    setList(
      list.map((el) =>
        el.id === targetId ? { ...el, content: newContent } : el
      )
    );
    console.log("targetId", targetId);
    console.log("newContent:", newContent);
  };

  const getData = async () => {
    const result = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((response) => response.json());

    const initialData = result.slice(0, 20).map((el) => {
      return {
        author: el.email,
        content: el.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        createDate: new Date().getTime(),
        id: dataId.current++,
      };
    });

    setList(initialData);
  };

  useEffect(() => {
    getData();
  }, []);

  const getDiaryAnalysis = useMemo(() => {
    console.log("일기 분석 시작");

    const goodCount = list.filter((el) => el.emotion >= 3).length;
    const badCount = list.length - goodCount;
    const goodRatio = Math.floor((goodCount / list.length) * 100);
    return {
      goodCount,
      badCount,
      goodRatio,
    };
  }, [list.length]);

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;

  return (
    <>
      <DiaryCycle />
      <Diary onCreateDiary={onCreateDiary} />
      <div>전체일기: {list.length}</div>
      <div>기분 좋은 일기 개수: {goodCount}</div>
      <div>기분 나쁜 일기 개수: {badCount}</div>
      <div>기분 좋은 일기 비율: {goodRatio}</div>
      <DiaryList
        dummyList={list}
        onClickDelete={onClickDelete}
        onClickEdit={onClickEdit}
      />
    </>
  );
};
export default DiaryMain;
