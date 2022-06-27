import { ChangeEvent, useRef, useState } from "react";
import FilterUI from "./filter.presenter";
import _ from "lodash";
import { Modal } from "antd";
import "antd/dist/antd.css";

export default function Filter() {
  const [inputs, setInputs] = useState({
    name: "",
    kscore: "",
    mscore: "",
    escore: "",
  });

  const [listNames, setListNames] = useState([]);
  const [listKScore, setListKScore] = useState([]);
  const [listMScore, setListMScore] = useState([]);
  const [listEScore, setListEScore] = useState([]);

  const clearNameRef = useRef<HTMLInputElement>(null);
  const clearKScore = useRef<HTMLInputElement>(null);
  const clearMScore = useRef<HTMLInputElement>(null);
  const clearEScore = useRef<HTMLInputElement>(null);

  const onChangeScore = _.debounce((event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  }, 300);

  const onClickSubmit = () => {
    const { name, kscore, mscore, escore } = inputs;

    if (!name || !kscore || !mscore || !escore) {
      Modal.warn({ content: "please fill all the information" });
      return;
    }

    setListNames([name, ...listNames]);
    setListKScore([kscore, ...listKScore]);
    setListMScore([mscore, ...listMScore]);
    setListEScore([escore, ...listEScore]);

    clearNameRef.current.value = "";
    clearKScore.current.value = "";
    clearMScore.current.value = "";
    clearEScore.current.value = "";

    console.log("inputs:", inputs);
    console.log("listKScore:", listKScore);
  };

  return (
    <FilterUI
      onChangeScore={onChangeScore}
      onClickSubmit={onClickSubmit}
      listNames={listNames}
      listKScore={listKScore}
      listMScore={listMScore}
      listEScore={listEScore}
      clearNameRef={clearNameRef}
      clearKScore={clearKScore}
      clearMScore={clearMScore}
      clearEScore={clearEScore}
    />
  );
}
