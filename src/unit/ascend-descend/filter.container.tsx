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
  const [isFilter, setIsFilter] = useState<boolean>(false);

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

  const onClickKScoreFilter = () => {
    setIsFilter((prev) => !prev);

    if (isFilter === true) {
      return setListKScore(listKScore.sort((a, b) => a - b));
    } else if (isFilter === false) {
      return setListKScore(listKScore.sort((a, b) => a - b).reverse());
    }
  };

  const onClickAlphabet = () => {
    // setListNames(listNames.sort((a, b) => a.localeCompare(b)));
    setListNames(listNames.sort((a, b) => b.localeCompare(a)));
  };

  //   useEffect(() => {
  //     onClickKScoreFilter();
  //   }, []);

  const onClickSubmit = () => {
    const { name, kscore, mscore, escore } = inputs;

    if (!name || !kscore || !mscore || !escore) {
      Modal.warn({ content: "please fill all the information" });
      return;
    }

    // if (!/^[a-zA-Z]+$/g.test(name)) {
    if (!/^[a-zA-Z][a-zA-Z ]*$/.test(name)) {
      Modal.warn({ content: "please enter the name correctly" });
      return;
    }

    if (
      Number(kscore) > 100 ||
      Number(kscore) < 0 ||
      Number(mscore) > 100 ||
      Number(mscore) < 0 ||
      Number(escore) > 100 ||
      Number(escore) < 0
    ) {
      Modal.warn({ content: "please enter the score correctly" });
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
      onClickKScoreFilter={onClickKScoreFilter}
      isFilter={isFilter}
      onClickAlphabet={onClickAlphabet}
    />
  );
}
