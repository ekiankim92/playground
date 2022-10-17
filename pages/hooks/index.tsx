import Props1 from "./props1/props1";
import Props2 from "./props2/props2";
import styled from "@emotion/styled";
import { useEffect, useMemo, useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const MainPage = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #000;
  margin: 30px auto;
`;

const HooksPage = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const onClickCount = () => {
    setCount((prev) => prev + 1);
  };

  const onChangeText = (event) => {
    setText(event.target.value);
  };

  const InputText = () => {
    useEffect(() => {
      console.log("this is text within InputText useEffect:", text);
    });

    return <div>{text}</div>;
  };

  return (
    <Container>
      <MainPage>
        <h2>Hooks practice</h2>
        <div>{count}</div>
        <button onClick={onClickCount}>Increase by one</button>
        {/* <div>{text}</div> */}
        <InputText />
        <input onChange={onChangeText} />
      </MainPage>
      <Props1 onClickCount={onClickCount} />
      <Props2 onClickCount={onClickCount} />
    </Container>
  );
};

export default HooksPage;
