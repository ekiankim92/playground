import { useEffect, useState } from "react";
import CalendarUI from "./calendar.presenter";

export default function Calendar() {
  const [value, setValue] = useState(new Date());
  const [list, setList] = useState([]);
  const [inputs, setInputs] = useState("");
  const [inputsList, setInputsList] = useState([]);

  const onClickList = () => {
    const result = window.prompt("would you like to add schedule?");
    if (result) {
      localStorage.setItem("list", JSON.stringify(result));
      setList([...list, result]);
    }
  };

  useEffect(() => {
    const newList = JSON.parse(localStorage.getItem("list") || "[]");
    setList([newList]);
  }, []);

  const onChangeInput = (event) => {
    setInputs(event.target.value);
  };

  const onClickAdd = () => {
    localStorage.setItem("animals", JSON.stringify([...inputsList, inputs]));
  };

  useEffect(() => {
    const newAnimals = JSON.parse(localStorage.getItem("animals") || "[]");
    console.log(newAnimals);
    setInputsList(newAnimals);
  }, [inputs]);

  return (
    <CalendarUI
      value={value}
      setValue={setValue}
      onClickList={onClickList}
      list={list}
      onChangeInput={onChangeInput}
      onClickAdd={onClickAdd}
      inputsList={inputsList}
    />
  );
}
