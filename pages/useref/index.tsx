import { useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { Modal } from "antd";
import { useEffect, useRef, useState } from "react";
import { CREATE_USER } from "../../src/unit/useref/useref.queries";
import "antd/dist/antd.css";

const Wrapper = styled.div`
  width: 600px;
  /* height: 600px; */
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

const SecondWrapper = styled.div`
  width: 280px;
  height: 280px;
  border: 1px solid #000;
  margin: 10px auto;
`;

const ThirdWrapper = styled.div`
  width: 480px;
  height: 180px;
  border: 1px solid #000;
  margin: 10px auto;
`;

const FourthWrapper = styled.div`
  width: 320px;
  height: 320px;
  border: 1px solid #000;
  margin: 10px auto;
`;

const UseRefPage = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [createUser] = useMutation(CREATE_USER);

  const { name, email, password } = inputs;

  const nameRef = useRef(null);
  const changeRef = useRef(null);
  const disableRef = useRef(null);
  const clearRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onChangeInfo = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const onClickSubmit = async () => {
    emailRef.current.value = "";
    passwordRef.current.value = "";

    if (!name || !email || !password) {
      Modal.warn({ content: "Please fill all the information" });
      return;
    }
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
      console.log("error.message", error.message);
    }
  };

  useEffect(() => {
    nameRef.current.focus();
    setTimeout(() => {
      changeRef.current.textContent =
        "This will be the new text that will change!";
    }, 3000);
  }, []);

  const onClickOn = () => {
    disableRef.current.disabled = false;
  };

  const onClickOff = () => {
    disableRef.current.disabled = true;
  };

  const onClickClear = () => {
    clearRef.current.value = "";
  };

  return (
    <Wrapper>
      <div>useRef Practice</div>
      <NameInput
        type="text"
        placeholder="name"
        name="name"
        ref={nameRef}
        onChange={onChangeInfo}
      />
      <EmailInput
        type="text"
        placeholder="email"
        name="email"
        ref={emailRef}
        onChange={onChangeInfo}
      />
      <PasswordInput
        type="password"
        placeholder="password"
        name="password"
        ref={passwordRef}
        onChange={onChangeInfo}
      />
      <div>
        <SubmitBtn onClick={onClickSubmit}>Submit</SubmitBtn>
      </div>
      <SecondWrapper>
        <h1>Changing the content after few seconds</h1>
        <div ref={changeRef}>This is the useRef testing</div>
      </SecondWrapper>
      <ThirdWrapper>
        <h1>Disabling on and off</h1>
        <input disabled ref={disableRef} />
        <input type="button" value="ON" onClick={onClickOn} />
        <input type="button" value="OFF" onClick={onClickOff} />
      </ThirdWrapper>
      <FourthWrapper>
        <div>Clearing the input</div>
        <input
          type="text"
          style={{ width: "220px", height: "40px" }}
          ref={clearRef}
        />
        <input type="button" value="Clear" onClick={onClickClear} />
      </FourthWrapper>
    </Wrapper>
  );
};
export default UseRefPage;
