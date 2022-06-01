import { ChangeEvent, useRef, useState } from "react";
import ScrollUI from "./scroll.presenter";

export default function Scroll() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [fifth, setFifth] = useState("");

  const [inputs, setInputs] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
    fifth: "",
  });

  const [error, setError] = useState("");

  const myRef = useRef(null);
  const secondRef = useRef(null);
  const fifthRef = useRef(null);
  const allRef = useRef(null);

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    const { third, fourth } = inputs;
    setInputs({ ...inputs, [event.target.name]: event.target.value });
    console.log("third:", third);
    console.log("fourth:", fourth);
  };

  const onChangeFirstInput = (event: ChangeEvent<HTMLInputElement>) => {
    setFirst(event.target.value);
  };

  const onChangeSecondInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSecond(event.target.value);
  };

  const onChangeFifthInput = (event: ChangeEvent<HTMLInputElement>) => {
    setFifth(event.target.value);
  };

  const onClickSubmit = () => {
    const { third, fourth } = inputs;

    if (!first) {
      myRef.current.scrollIntoView({ block: "center", behavior: "smooth" });
      setError("please enter the information");
    }

    if (!second) {
      secondRef.current.scrollIntoView({ block: "start", behavior: "smooth" });
      //   setError("please enter the information");
    }

    if (!fifth) {
      fifthRef.current.scrollIntoView({ block: "center", behavior: "auto" });
      //   setError("please enter the information");
    }

    if (!third || !fourth) {
      allRef.current.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  };

  return (
    <ScrollUI
      onChangeFirstInput={onChangeFirstInput}
      onChangeSecondInput={onChangeSecondInput}
      onChangeFifthInput={onChangeFifthInput}
      onChangeInputs={onChangeInputs}
      onClickSubmit={onClickSubmit}
      myRef={myRef}
      secondRef={secondRef}
      fifthRef={fifthRef}
      error={error}
      allRef={allRef}
    />
  );
}
