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

  const person = [
    {
      name: "Ian",
      age: 31,
      gender: "male",
    },
    {
      name: "Grace",
      age: 28,
      gender: "female",
    },

    // person1: {
    //   name: "Ian",
    //   age: 31,
    //   gender: "male",
    // },
    // person2: {
    //   name: "Grace",
    //   age: 28,
    //   gender: "female",
    // },
    // person3: "Jessica",
    // person4: "Jack",
    // person5: "Hillary",
    // person6: "Sam",
  ];

  console.log(person);

  return (
    <>
      <div>Hello WOrld</div>
      <Input type="text" onChange={onChangeName} />
      {person.map((el) => (
        <div key={el}>
          <div>{el.name}</div>
          {/* <h1>{el.person1.name}</h1> */}
          {/* <h1>{el.person2.name}</h1> */}
        </div>
      ))}
      {/* <div>{person[0].person1}</div> */}
    </>
  );
};
export default InputPage;
