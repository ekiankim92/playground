import styled from "@emotion/styled";
import { useState } from "react";
import "antd/dist/antd.css";
import { Modal } from "antd";

const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  border: 1px solid #000;
  margin: 60px auto;
`;

const CopyInput = styled.input`
  width: 260px;
`;

const CopyText = styled.div`
  width: 260px;
  height: 60px;
  border: 1px solid #000;
`;

const CopyAndPaste = () => {
  const [text, setText] = useState("");

  //   const emailAddress = `@buxikorea.com`;

  const onChangeDiv = (event) => {
    setText(event.target.value);
    console.log(event.target.value);
  };

  //   const onClickCopy = async () => {
  //     await navigator.clipboard.writeText(text);
  //     Modal.success({ content: "결제링크 클립보드에 복사되었습니다" });
  //     console.log(text);
  //     if (!text) {
  //       Modal.warn({ content: "무언가를 적어주세요" });
  //       setText("");
  //     }
  //   };

  const onClickCopy = async () => {
    await navigator.clipboard.writeText(text);
    console.log(text);
    if (text) {
      Modal.success({ content: "결제링크가 클립보드에 복사되었습니다" });
    } else if (!text) {
      Modal.warn({ content: "무언가를 적어주세요" });
    }
  };

  return (
    <Wrapper>
      <div>Hello World</div>
      <CopyInput type="text" value={text} onChange={onChangeDiv} />
      <CopyText>{`@meikoamerica.com ${text}`}</CopyText>
      <input value={text} /> <br />
      <button onClick={onClickCopy}>Copy</button>
    </Wrapper>
  );
};
export default CopyAndPaste;
