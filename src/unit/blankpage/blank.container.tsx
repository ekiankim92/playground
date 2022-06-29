import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import BlankUI from "./blank.presenter";

// const initialCount = { count: 1 };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return { count: state + 1 };
//     case "decrement":
//       return { count: state - 1 };
//     default:
//       throw new Error();
//   }
// };

export default function Blank() {
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");
  const [count, setCount] = useState(0);
  const clearRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  //   const [number, dispatch] = useReducer(reducer, initialCount);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const onChangeSecondInput = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("second event.target.value:", event.target.value);
    setNickName(event.target.value);
  };

  const onClickSubmit = (event: FormEvent<HTMLFormElement>) => {
    console.log("name:", name);
    console.log("Thank you for submiting the form!");
    event.preventDefault();
    router.push("/tip/");
    setName("");
    clearRef.current.value = "";
  };

  const onClickSecondSubmit = () => {
    console.log("nickname:", nickName);
    // console.log("Thank you for submiting second form");
    setNickName("");
  };

  const onClickCountAdd = () => {
    setCount((prev) => prev + 1);
    console.log("add count:", count);
  };

  const onClickCountMinus = () => {
    setCount((prev) => prev - 1);
    console.log("minus count:", count);
    if (count <= 0) {
      setCount(0);
    }
  };

  //   const reducer = (state, action) => {
  //     switch (action.type) {
  //       case "increment":
  //         return { count: state.count + 1 };
  //       case "decrement":
  //         return { count: state.count - 1 };
  //       default:
  //         throw new Error();
  //     }
  //   };

  //   const initialState = { count: 0 };

  //   const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BlankUI
      onChangeInput={onChangeInput}
      name={name}
      onClickSubmit={onClickSubmit}
      onChangeSecondInput={onChangeSecondInput}
      onClickSecondSubmit={onClickSecondSubmit}
      myOwnNickname={nickName}
      count={count}
      onClickCountAdd={onClickCountAdd}
      onClickCountMinus={onClickCountMinus}
      clearRef={clearRef}
      //   state={state}
      //   dispatch={dispatch}
      //   number={number}
      //   dispatch={dispatch}
      //   reducer={reducer}
    />
  );
}
