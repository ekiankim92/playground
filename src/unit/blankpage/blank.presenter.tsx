import * as S from "./blank.styles";
import { PropsBlank } from "./blank.types";
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const initialCount = { count: 0 };

export default function BlankUI(props: PropsBlank) {
  const [state, dispatch] = useReducer(reducer, initialCount);

  console.log("props.isTwinkle:", props.isTwinkle);

  return (
    <>
      <S.Container>
        <S.Title>Blank Page</S.Title>
        <form onSubmit={props.onClickSubmit}>
          <div>1st Test</div>
          <input
            placeholder="enter your name"
            onChange={props.onChangeInput}
            ref={props.clearRef}
          />
          <input type="submit" value="Submit" />
        </form>
        <label>{props.name}</label>
        <div>============================================================</div>
        <div>2nd Test</div>
        <input placeholder="your name" onChange={props.onChangeSecondInput} />
        <button onClick={props.onClickSecondSubmit}>Submit</button>
        <div>{props.myOwnNickname}</div>
        <div>============================================================</div>
        <div>IMG test</div>
        <S.DownImg src="down.png/" isTwinkle={props.isTwinkle} />
        <S.CrossImg src="cross.png/" />
        <div>============================================================</div>
        <div>Normal count</div>
        <div>{props.count}</div>
        <button onClick={props.onClickCountAdd}>Add</button>
        <button onClick={props.onClickCountMinus}>Subtract</button>
        <div>============================================================</div>
        Count: {state.count}
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <div>============================================================</div>
        {/* <div>The New Count</div> */}
        {/* <div>{props.number.count}</div> */}
        {/* <button onClick={() => props.dispatch({ type: "decrement" })}>-</button>
        <button onClick={() => props.dispatch({ type: "increment" })}>+</button> */}
      </S.Container>
    </>
  );
}
