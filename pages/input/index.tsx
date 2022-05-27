import styled from "@emotion/styled";
import { useRef, useState } from "react";

const Input = styled.input`
  width: 260px;
  height: 40px;
  margin: 50px;
`;

const AddButton = styled.button`
  width: 200px;
  height: 40px;
  margin: -46px;
`;

const DeleteButton = styled.button`
  width: 200px;
  height: 40px;
  margin: 50px;
`;

const InputPage = () => {
  const [name, setName] = useState("");
  const [add, setAdd] = useState("");
  const [addList, setAddList] = useState([]);
  const clearRef = useRef(null);

  const onChangeName = (event) => {
    setName(event.target.value);
    console.log("name:", name);
    console.log("event.target.value:", event.target.value);
  };

  const onChangeAddName = (event) => {
    setAdd(event.target.value);
    console.log(event.target.value);
  };

  const onClickAddNames = () => {
    clearRef.current.value = "";
    setAddList([...addList, add]);
    addList.join("");
    console.log("addList:", addList);
  };

  const onClickDelete = () => {
    setAddList([]);
    console.log("addList:", addList);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      setAddList([...addList, add]);
      clearRef.current.value = "";
    }
    console.log("event:", event);
  };

  const person = [
    // {
    //   name: "Ian",
    //   age: 31,
    //   gender: "male",
    // },
    // {
    //   name: "Grace",
    //   age: 28,
    //   gender: "female",
    // },
    {
      person1: {
        name: "Ian",
        age: 31,
        gender: "male",
      },
      person2: {
        name: "Grace",
        age: 28,
        gender: "female",
      },
      person3: "Nani",
      person4: "Jack",
      person5: "Hillary",
      person6: "Sam",
    },
  ];

  console.log(person);

  const keys = Object.keys(person[0]);

  console.log("keys:", keys);

  const values = Object.values(person[0]);

  console.log("values:", values);

  const { choice1, choice2, choice3 } = person;

  console.log("choice1:", choice1);

  return (
    <>
      <div>Hello WOrld</div>
      <Input type="text" onChange={onChangeName} />
      {person.map((el, index) => (
        <div key={index}>
          {/* <div>{el.name}</div> */}
          <h1>{el.person1.name}</h1>
          {/* <div>{el.person1}</div> */}
          <h1>{el.person2.name}</h1>
          <h1>{el.person3}</h1>
          <h1>{el.person4}</h1>
        </div>
      ))}
      <Input
        placeholder="add names to the list"
        onChange={onChangeAddName}
        ref={clearRef}
        onKeyPress={onKeyPress}
      />
      <AddButton onClick={onClickAddNames}>Add</AddButton>
      <DeleteButton onClick={onClickDelete}>Clear All</DeleteButton>
      <div>Added List</div>
      <div>{addList}</div>
    </>
  );
};
export default InputPage;
