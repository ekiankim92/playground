import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import RefactoringUI from "./refactoring.presenter";
import { CREATE_USER } from "./refactoring.queries";
import "antd/dist/antd.css";

export default function Refactoring() {
  const [createUser] = useMutation(CREATE_USER);

  const onFocus = useRef(null);

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const onChangePasswordConfirm = (event) => {
    setConfirmPassword(event.target.value);
    console.log(event.target.value);
  };

  const onClickSubmit = async (data) => {
    // cannot use destrutive assignment in useForm because
    // you cant have missing input when its in useForm

    const { password } = inputs;

    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            name: data.name,
            email: data.email,
            password: data.password,
          },
        },
      });
      console.log("result:", result);
      Modal.success({ content: "Registration Successful" });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  useEffect(() => {
    // cant use focus because its useForm
    onFocus.current.focus();
  }, []);

  return (
    <RefactoringUI
      onChangeInputs={onChangeInputs}
      onClickSubmit={onClickSubmit}
      onChangePasswordConfirm={onChangePasswordConfirm}
      onFocus={onFocus}
    />
  );
}
