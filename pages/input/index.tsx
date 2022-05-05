import styled from "@emotion/styled";
import { useState } from "react";

const Input = styled.input`
  width: 260px;
  height: 40px;
  margin: 50px;
`;

const InputPage = () => {
  const [name, setName] = useState("");

  const onChangeName = (event) => {
    setName(event.target.value);
    console.log("name:", name);
    console.log("event.target.value:", event.target.value);
  };

  return (
    <>
      <div>Hello WOrld</div>
      <Input type="text" onChange={onChangeName} />
    </>
  );
};
export default InputPage;
