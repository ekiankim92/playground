import { useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { Modal } from "antd";
import { useState } from "react";
import { CREATE_USER } from "../../src/unit/useref/useref.queries";

const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  border: 1px solid #000;
  margin: 60px auto;
`;

const NameInput = styled.input`
  margin: 12px;
  width: 360px;
  height: 44px;
  padding: 12px;
  :focus {
    outline: none;
    border: 1px solid lightgreen;
  }
`;

const EmailInput = styled.input`
  margin: 12px;
  width: 360px;
  height: 44px;
  padding: 12px;
  :focus {
    outline: none;
    border: 1px solid lightcoral;
  }
`;

const PasswordInput = styled.input`
  margin: 12px;
  width: 360px;
  height: 44px;
  padding: 12px;
  :focus {
    outline: none;
    border: 1px solid lightblue;
  }
`;

const SubmitBtn = styled.button`
  margin: 12px;
  width: 220px;
  height: 40px;
  :hover {
    cursor: pointer;
  }
`;

const UseRefPage = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [createUser] = useMutation(CREATE_USER);

  const onChangeInfo = (event) => {
    const { name, email, password } = inputs;
    setInputs({ ...inputs, [event.target.name]: event.target.value });
    console.log(name);
    console.log(email);
    console.log(password);
  };

  const onClickSubmit = async () => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            ...inputs,
          },
        },
      });
      console.log("result:", result);
      Modal.success({ content: "Registration Successful" });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Wrapper>
      <div>useRef Practice</div>
      <NameInput
        type="text"
        placeholder="name"
        name="name"
        onChange={onChangeInfo}
      />
      <EmailInput
        type="text"
        placeholder="email"
        name="email"
        onChange={onChangeInfo}
      />
      <PasswordInput
        type="password"
        placeholder="password"
        name="password"
        onChange={onChangeInfo}
      />
      <div>
        <SubmitBtn onClick={onClickSubmit}>Submit</SubmitBtn>
      </div>
    </Wrapper>
  );
};
export default UseRefPage;
