import styled from "@emotion/styled";
import { ChangeEvent, useReducer, useRef, useState } from "react";

interface Props {
  onClickSubmit: any;
  onChangeInputs: any;
}

const Wrapper = styled.div`
  width: 800px;
  height: 600px;
  margin: 20px auto;
  border: 1px solid #000;
`;

const Input = styled.input`
  width: 200px;
  height: 40px;
  margin: 30px;
`;

const Button = styled.button`
  width: 300px;
  height: 40px;
  border: none;
  cursor: pointer;
  margin: 30px;
`;

const DataWrapper = styled.div`
  border: 1px solid #000;
`;

export default function Blank5() {
  const reducer = (state, action) => {
    let newState = [];
    switch (action.type) {
      case "INIT": {
        return action.data;
      }
      case "CREATE": {
        newState = [action.data, ...state];
        break;
      }
      case "REMOVE": {
        newState = state.filter((el) => el.id !== action.targetId);
        break;
      }
      default:
        return newState;
    }
    return newState;
  };

  const [data, dispatch] = useReducer(reducer, []);
  const dataId = useRef(1);
  const [inputs, setInputs] = useState({
    date: new Date().toISOString().slice(0, 10),
    emotion: 3,
    content: "",
  });

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };

  const onClickCreateDiary = () => {
    const { date, content, emotion } = inputs;
    onCreate(date, content, emotion);
  };

  const onClickRemove = (targetId) => () => {
    dispatch({ type: "REMOVE", targetId });
    console.log("data:", data);
    console.log("targetId:", targetId);
  };

  return (
    <Wrapper>
      <div>Testing Reducer</div>
      <Input
        type="date"
        name="date"
        value={inputs.date}
        onChange={onChangeInputs}
      />
      <Input placeholder="emotion" name="emotion" onChange={onChangeInputs} />
      <Input placeholder="content" name="content" onChange={onChangeInputs} />
      <Button>Cancel</Button>
      <Button onClick={onClickCreateDiary}>Submit</Button>
      <hr />
      <hr />
      {data.map((el, index) => (
        <DataWrapper key={index} onClick={onClickRemove(el.id)}>
          <div>ID: {el.id}</div>
          <div>{el.date}</div>
          <div>{el.emotion}</div>
          <div>{el.content}</div>
        </DataWrapper>
      ))}
    </Wrapper>
  );
}
