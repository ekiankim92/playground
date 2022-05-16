import { ChangeEvent, useRef, useState } from "react";
import UserInfoUI from "./userinfo.presenter";
import _ from "lodash";

const UserInfo = () => {
  const [isNameCancel, setIsNameCancel] = useState(false);
  const [isEmailCancel, setIsEmailCancel] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState("");
  const inputRef = useRef(null);
  const emailRef = useRef(null);
  const bookerRef = useRef(null);

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setIsNameCancel(true);
    } else {
      setIsNameCancel(false);
    }
    setName(event.target.value);
    console.log(event.target.value);
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setIsEmailCancel(true);
    } else {
      setIsEmailCancel(false);
    }
    setEmail(event.target.value);
    console.log(event.target.value);
  };

  const onChangeNumber = (event) => {
    // const phoneNumber = event.target.value.slice(0, 12);

    setNumber(event.target.value);
    console.log(event.target.value);
  };

  const onClickClear = () => {
    setIsNameCancel(false);
  };

  const onClickEmailClear = () => {
    setIsEmailCancel(false);
  };

  const handleReset = () => {
    inputRef.current.value = "";
  };

  const handleEmailReset = () => {
    emailRef.current.value = "";
  };

  const onClickBooker = (checked) => {
    bookerRef.current.value = name;
    // const empty = (bookerRef.current.value = "");

    // if (!name) {
    //   alert("there is no name");
    //   return empty;
    // }

    console.log(checked);
  };

  const onClickVerify = () => {};

  return (
    <UserInfoUI
      isEmailCancel={isEmailCancel}
      isNameCancel={isNameCancel}
      name={name}
      inputRef={inputRef}
      emailRef={emailRef}
      bookerRef={bookerRef}
      email={email}
      onChangeName={onChangeName}
      onClickClear={onClickClear}
      handleReset={handleReset}
      handleEmailReset={handleEmailReset}
      onChangeEmail={onChangeEmail}
      onClickEmailClear={onClickEmailClear}
      onChangeNumber={onChangeNumber}
      onClickBooker={onClickBooker}
      onClickVerify={onClickVerify}
    />
  );
};
export default UserInfo;
