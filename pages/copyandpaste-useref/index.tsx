import { useState, useRef } from "react";

export default function CopyUseRef() {
  const [success, setSuccess] = useState(false);

  const textInput = useRef();

  const copy = () => {
    const el = textInput.current;
    el.select();
    document.execCommand("copy"); // deprecated
    setSuccess(true);
  };

  return (
    <>
      <input
        type="text"
        value="This is just the following test!"
        ref={textInput}
        readOnly
      ></input>
      <button onClick={copy}>copy</button>

      {success ? <div style={{ color: "green" }}>Success!</div> : null}
    </>
  );
}
