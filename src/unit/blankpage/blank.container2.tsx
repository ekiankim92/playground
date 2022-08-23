import styled from "@emotion/styled";
import { useRef, useState } from "react";

const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
`;

export default function Blank2() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [chores, setChores] = useState<string>("");
  const [list, setList] = useState<string[]>([]);

  const headNumbers = 32;

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [disable, setDisable] = useState(true);

  const clearRef = useRef(null);

  const onChangeName = (event) => {
    setName(event.currentTarget.value);
    console.log(event.currentTarget.value);
    if (name) {
      setDisable(false);
    }
  };

  const onChangeEmail = (event) => {
    setEmail(event.currentTarget.value);
    if (email) {
      setDisable(false);
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.currentTarget.value);
    if (password) {
      setDisable(false);
    }
  };

  const onChangeInputs = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
    console.log("event.target.value:", event.target.value);
  };

  const onClickSubmit = () => {
    if (name || email || password) {
      setDisable(false);
    }
  };

  const onChangeList = (event) => {
    setChores(event.target.value);
    if (event.key === "Enter" || event.keyCode === 13) {
      setList([...list, chores]);
      clearRef.current.value = "";
    }
  };

  return (
    <Wrapper>
      <input placeholder="first name" onChange={onChangeName} />
      <input placeholder="name" onChange={onChangeInputs} name="name" />
      <input placeholder="email" onChange={onChangeEmail} />
      <input placeholder="passwword" onChange={onChangePassword} />
      <button onClick={onClickSubmit} disabled={disable}>
        Submit
      </button>
      <div>{`Avaiable Balalance ${headNumbers}`}</div>
      <input
        style={{ width: "260px", height: "40px" }}
        onChange={onChangeList}
        onKeyDown={onChangeList}
        ref={clearRef}
      />
      {list.map((el, index) => (
        <div key={index}>
          <div>{el}</div>
        </div>
      ))}
    </Wrapper>
  );
}
