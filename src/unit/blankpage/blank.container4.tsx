import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";

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

export default function Blank4() {
  const [inputs, setInputs] = useState({
    date: new Date().toISOString().slice(0, 10),
    emotion: 3,
    content: "",
  });
  const [list, setList] = useState([]);

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const onCreate = (date, emotion, content) => {
    console.log("list:", list);
    setList([...list, date, emotion, content]);
  };

  const onClickSubmitDiary = () => {
    const { date, emotion, content } = inputs;
    onCreate(date, emotion, content);
  };

  return (
    <Wrapper>
      <div>Testing</div>
      <Input
        type="date"
        name="date"
        value={inputs.date}
        onChange={onChangeInputs}
      />
      <Input placeholder="emotion" name="emotion" onChange={onChangeInputs} />
      <Input placeholder="content" name="content" onChange={onChangeInputs} />
      <Button>Cancel</Button>
      <Button onClick={onClickSubmitDiary}>Submit</Button>
      <hr />
      <hr />
      {list.map((el, index) => (
        <div key={index}>
          <div>{el}</div>
        </div>
      ))}
    </Wrapper>
  );
}
