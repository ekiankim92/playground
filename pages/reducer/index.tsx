import styled from "@emotion/styled";
import { useCallback, useReducer } from "react";

const Buttons = styled.button`
  width: 220px;
  height: 40px;
  border: none;
  margin: 16px;
  :hover {
    cursor: pointer;
  }
`;

const Reducer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increase": {
        return state + 1;
      }
      case "decrease": {
        return state - 1;
      }
      case "reset": {
        return initialState;
      }
      default:
        state;
    }
  };

  const initialState = 0;

  const [count, dispatch] = useReducer(reducer, initialState);

  const onIncrement = useCallback(() => {
    dispatch({ type: "increase" });
  }, []);

  const onDecrease = () => {
    if (count <= 0) {
      return;
    }
    dispatch({ type: "decrease" });
  };

  const onReset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <>
      <h2>useReducer</h2>
      <div style={{ margin: 20, fontSize: 18 }}>
        <div>{count}</div>
      </div>
      <Buttons onClick={onReset}>Reset</Buttons>
      <Buttons onClick={onIncrement}>+++</Buttons>
      <Buttons onClick={onDecrease}>---</Buttons>
    </>
  );
};
export default Reducer;
