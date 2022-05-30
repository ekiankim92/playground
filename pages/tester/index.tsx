import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Test() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const clearRef = useRef(null);

  const onChangeInput = (event) => {
    setInput(event.target.value);
  };

  const onClickAddList = () => {
    setList([...list, input]);
    clearRef.current.value = "";
  };

  const onKeyPressEnter = (event) => {
    if (event.key === "Enter") {
      setList([...list, input]);
      clearRef.current.value = "";
    }
  };

  return (
    <>
      <input
        onChange={onChangeInput}
        ref={clearRef}
        onKeyPress={onKeyPressEnter}
      />
      <button onClick={onClickAddList}>Add List</button>
      {list.map((el, index) => (
        <div key={uuidv4()}>
          <div>{index + 1}</div>
          <div>{el}</div>
        </div>
      ))}
    </>
  );
}
