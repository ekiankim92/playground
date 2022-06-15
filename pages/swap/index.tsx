import styled from "@emotion/styled";
import { useState, ChangeEvent, useRef } from "react";
import _ from "lodash";

const Wrapper = styled.div`
  width: 800px;
  height: 600px;
  border: 1px solid #000;
  margin: 20px auto;
`;

const Title = styled.h2`
  padding: 12px;
`;

const FirstInput = styled.input`
  width: 240px;
  height: 40px;
  margin: 12px;
  padding: 6px;
  ::placeholder {
    opacity: 0.4;
  }
  :focus {
    outline: none;
    border: none;
    border-bottom: 1px solid lightgreen;
  }
`;

const SecondInput = styled.input`
  width: 240px;
  height: 40px;
  margin: 12px;
  padding: 6px;
  ::placeholder {
    opacity: 0.4;
  }
  :focus {
    outline: none;
    border: none;
    border-bottom: 1px solid lightcoral;
  }
`;

const SwapImg = styled.img`
  width: 30px;
  height: 30px;
`;

const BodyWrapper = styled.section`
  display: flex;
  align-items: center;
`;

const SwapPage = () => {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");

  const firstRef = useRef(null);
  const secondRef = useRef(null);

  const onClickSwap = () => {
    setFirstInput((firstRef.current.value = secondInput));
    setSecondInput((secondRef.current.value = firstInput));
    console.log("firstInputRef:", firstRef.current.value);
    console.log("secondInputRef:", secondRef.current.value);
    console.log("firstInput:", firstInput);
    console.log("secondInput:", secondInput);
  };

  const onChangeFirstInput = _.debounce(
    (event: ChangeEvent<HTMLInputElement>) => {
      setFirstInput(event.target.value);
      console.log("firstInput:", event.target.value);
    },
    1000
  );

  const onChangeSecondInput = _.debounce(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSecondInput(event.target.value);
      console.log("secondInput:", event.target.value);
    },
    1000
  );

  return (
    <Wrapper>
      <Title>Value Swap</Title>
      <BodyWrapper>
        <FirstInput
          placeholder="first information"
          onChange={onChangeFirstInput}
          defaultValue={firstInput}
          ref={firstRef}
        />
        <SwapImg src="/swap.png/" onClick={onClickSwap} />
        <SecondInput
          placeholder="second information"
          onChange={onChangeSecondInput}
          defaultValue={secondInput}
          ref={secondRef}
        />
      </BodyWrapper>
    </Wrapper>
  );
};
export default SwapPage;
