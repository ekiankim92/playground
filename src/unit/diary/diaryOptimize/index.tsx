import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

const Wrapper = styled.div`
  padding: 50px;
`;

interface IDiaryProps {
  text?: string;
  count?: number;
}

export default function DiaryOptimize() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");

  const onClickCount = () => {
    setCount((prev) => prev + 1);
  };

  const onChangeText = (event) => {
    setText(event.target.value);
  };

  const TextView: React.FC<IDiaryProps> = React.memo(({ text }) => {
    useEffect(() => {
      console.log(`Update :: Text :: ${text}`);
    });

    return <div>{text}</div>;
  });

  const CountView: React.FC<IDiaryProps> = React.memo(({ count }) => {
    useEffect(() => {
      console.log(`Update :: Count :: ${count}`);
    });
    return <div>{count}</div>;
  });

  return (
    <Wrapper>
      <div>
        <h2>Count</h2>
        <CountView count={count} />
        <button onClick={onClickCount}>+</button>
      </div>
      <div>
        <h2>Text</h2>
        <TextView text={text} />
        <input value={text} onChange={onChangeText} />
      </div>
    </Wrapper>
  );
}
