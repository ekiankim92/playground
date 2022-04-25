import styled from "@emotion/styled";
import { useState } from "react";
import _ from "lodash";

const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid #000;
  margin: 60px auto;
`;

const SubmitButton = styled.button`
  width: 160px;
  height: 40px;
  background-color: ${(props) => (props.color ? "yellow" : "lightgray")};
`;

const LocalStoragePage = () => {
  const [color, setColor] = useState(false);
  const [keywords, setKeywords] = useState("");

  const onChangeKeywords = _.debounce((event) => {
    setKeywords(event.target.value);
  }, 400);

  const onClickSetItem = () => {
    setColor((prev) => !prev);
    localStorage.setItem("keywords", keywords);
  };

  const onClickGetItem = () => {
    localStorage.getItem("keywords");
    console.log(localStorage.getItem("keywords"));
  };

  return (
    <Wrapper>
      <label>Enter words:</label>
      <input type="text" onChange={onChangeKeywords} />
      <SubmitButton color={color} onClick={onClickSetItem}>
        Click
      </SubmitButton>
      <button onClick={onClickGetItem}>Get Item</button>
    </Wrapper>
  );
};
export default LocalStoragePage;
