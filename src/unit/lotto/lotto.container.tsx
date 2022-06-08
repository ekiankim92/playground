import { useEffect, useState } from "react";
import LottoUI from "./lotto.presenter";

export default function Lotto() {
  const [numbers, setNumbers] = useState("");

  const [lotto, setLotto] = useState([]);

  const [first, setFirst] = useState("");

  const [second, setSecond] = useState("");

  const [third, setThird] = useState("");

  const [fourth, setFourth] = useState("");

  const [inputs, setInputs] = useState({
    uno: "",
    dos: "",
    tres: "",
    quatro: "",
  });

  const pressNumbers = (event) => {
    const { uno, dos, tres, quatro } = inputs;
    const generator = () => {
      const digits = [Math.floor(Math.random() * 45 + 1)];
      return String(digits.sort((a, b) => a - b)).padStart(2, "0");
    };
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
    console.log("uno:", uno);
    console.log("dos:", dos);
    console.log("tres:", tres);
    console.log(event.target.value);
  };

  useEffect(() => {
    const numberGenerator = () => {
      const digits = String(Math.floor(Math.random() * 45 + 1)).padStart(
        2,
        "0"
      );
      const firstDigit = String(Math.floor(Math.random() * 45 + 1)).padStart(
        2,
        "0"
      );
      const secondDigit = String(Math.floor(Math.random() * 45 + 1)).padStart(
        2,
        "0"
      );
      const generator = () => {
        const digits = [Math.floor(Math.random() * 45 + 1)];
        return String(digits.sort((a, b) => a - b)).padStart(2, "0");
      };

      setNumbers(digits);
      setFirst(generator());
      setSecond(generator());
      setThird(generator());
      setFourth(generator());
    };
    numberGenerator();
  }, []);

  const generateRandomNumbers = () => {
    const arr = [];
    while (arr.length < 6) {
      const num = Math.floor(Math.random() * 45 + 1);
      if (arr.indexOf(num) === -1) arr.push(num);
      let add = true;

      for (let i = 0; i < 45; i++) {
        if (arr[i] === arr) {
          add = false;
        }
      }
    }
    const sort = [...arr].sort((a, b) => a - b);
    setLotto(sort);
  };

  return (
    <LottoUI
      numbers={numbers}
      //   numberGenerator={numberGenerator}
      lotto={lotto}
      first={first}
      second={second}
      third={third}
      fourth={fourth}
      generateRandomNumbers={generateRandomNumbers}
      pressNumbers={pressNumbers}
    />
  );
}
