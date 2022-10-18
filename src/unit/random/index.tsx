import styled from "@emotion/styled";
import { useRef, useState } from "react";
import _ from "lodash";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Title = styled.h2`
  padding: 8px;
`;

const GuideLabel = styled.h3`
  padding: 8px;
`;

const NamesInputs = styled.input`
  width: 220px;
  height: 40px;
  padding: 8px;
  margin: 10px;
  ::placeholder {
    opacity: 0.5;
  }
`;

const PickButton = styled.button`
  width: 220px;
  height: 40px;
  border: none;
  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

const NamesList = styled.div`
  margin: 10px;
`;

const Hashtag = styled.div`
  width: 600px;
  height: 300px;
  display: flex;
`;

const CardItems = styled.div`
  width: 80px;
  height: 40px;
  display: flex;
`;

const Cards = styled.div`
  border: 1px solid #000;
  :hover {
    cursor: pointer;
  }
`;

export default function Random() {
  const [names, setNames] = useState("");
  const [picked, setPicked] = useState("");
  const [namesList, setNamesList] = useState([]);
  const clearName = useRef(null);

  const onChangeNames = (event) => {
    setNames(event.target.value);
  };

  const onEnterKey = (event) => {
    if (event.key === "Enter" || event.keycode === 13) {
      setNamesList([names, ...namesList]);
      clearName.current.value = "";
    }
    console.log(namesList);
  };

  //   const onClickPick = (arr) => {
  //     const randomIndex = Math.floor(Math.random() * namesList.length);
  //     const item = arr[randomIndex];
  //     console.log("item:", item);
  //     console.log("arr:", arr);
  //     return item;
  //   };

  const onClickPick = () => {
    const randomList = _.sample(namesList);
    console.log(randomList);
    setPicked(randomList);

    if (!namesList || !names) {
      alert("please enter all the names");
    }
  };

  // splice
  const onClickDelete = (index) => () => {
    console.log("item is deleted");
    console.log(index);
    namesList.splice(index, 1);
    setNamesList([...namesList]);
  };

  // filter does not work because there is no id associated with
  const onClickFilter = (index) => () => {
    console.log(index);
    const newList = namesList.filter((el) => el.id !== index);
    setNamesList([...namesList, newList]);
  };

  return (
    <Wrapper>
      <Title>Select and pick randomly</Title>
      <GuideLabel>Enter all the names</GuideLabel>
      <NamesInputs
        placeholder="Enter names"
        onChange={onChangeNames}
        onKeyDown={onEnterKey}
        ref={clearName}
      />
      <PickButton onClick={onClickPick}>Pick</PickButton>
      <Hashtag>
        {/* <div>{namesList.join(", ")}</div> */}
        {namesList.map((el, index) => (
          <CardItems>
            <Cards onClick={onClickDelete(index)}>
              {el} {index < el.length - 1 ? " , " : "  "}
            </Cards>
          </CardItems>
        ))}
      </Hashtag>
      <div>Randomly picked person is!! {picked}</div>
    </Wrapper>
  );
}
