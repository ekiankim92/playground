import Diary from "./diaryCreate/diary.container";
import DiaryList from "./diarylist";
import DiaryCycle from "./diaryCycle";
import DiaryOptimize from "./diaryOptimize";
import OptimizeTest from "./diaryMemo";
import {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
  useReducer,
  createContext,
} from "react";

export const GlobalContext = createContext({});

export const DiaryDispatchContext = createContext({});

const DiaryMain = () => {
  const memoizedDispatches = useMemo(() => {
    return { onCreateDiary, onClickDelete, onClickEdit };
  }, []);

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

  // going to use useReducer
  // const [list, setList] = useState([]);

  const reducer = (state, action) => {
    switch (action.type) {
      case "INIT": {
        return action.list;
      }
      case "CREATE": {
        const createdDate = new Date().toISOString().slice(0, 10);
        const newItem = {
          ...action.list,
          createdDate,
        };
        return [newItem, ...state];
      }
      case "REMOVE": {
        return state.filter((el) => el.id !== action.id);
      }
      case "EDIT": {
        return state.map((el) =>
          el.id === action.targetId ? { ...el, content: action.newContent } : el
        );
      }
      default:
        return state;
    }
  };

  const [list, dispatch] = useReducer(reducer, []);

  const dataId = useRef(0);

  const myValue = {
    isEdit: false,
    isOpen: false,
  };

  const onCreateDiary = useCallback(
    (author: string, content: string, emotion: number) => {
      dispatch({
        type: "CREATE",
        list: { author, content, emotion, id: dataId.current },
      });
      // const createdDate = new Date().toISOString().slice(0, 10);
      // const newItems = {
      //   author,
      //   content,
      //   emotion,
      //   createdDate,
      //   id: dataId.current,
      // };
      dataId.current += 1;
      // setList((list) => [newItems, ...list]);
    },
    []
  );

  const onClickDelete = (id) => () => {
    if (window.confirm(`${id} delete?`)) {
      const newDiaryList = list.filter((el) => el.id !== id);
      // setList(newDiaryList);
      dispatch({ type: "EDIT", list: newDiaryList });
    }
  };

  const onClickEdit = useCallback((targetId, newContent) => {
    dispatch({ type: "EDIT", targetId, newContent });

    // setList(
    //   list.map((el) =>
    //     el.id === targetId ? { ...el, content: newContent } : el
    //   )
    // );
  }, []);

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
    dispatch({ type: "INIT", list: initialData });
    // setList(initialData);
  };

  useEffect(() => {
    getData();
  }, []);

  const getDiaryAnalysis = useMemo(() => {
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
    <GlobalContext.Provider value={myValue}>
      <DiaryDispatchContext.Provider value={memoizedDispatches}>
        <OptimizeTest />
        <DiaryOptimize />
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
      </DiaryDispatchContext.Provider>
    </GlobalContext.Provider>
  );
};
export default DiaryMain;
