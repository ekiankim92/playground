import { ChangeEvent, useEffect, useRef, useState } from "react";
import UserInfoUI from "./userinfo.presenter";
import _ from "lodash";

const UserInfo = () => {
  const [isNameCancel, setIsNameCancel] = useState(false);
  const [isEmailCancel, setIsEmailCancel] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const inputRef = useRef(null);
  const emailRef = useRef(null);
  const bookerRef = useRef(null);
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(0);

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

  const onClickVerify = () => {
    // let time = 180;
    // const interval = setInterval(() => {
    //   const minutes = Math.floor(time / 60);
    //   const seconds = String(time % 60).padStart(2, "0");
    //   if (time <= 0) {
    //     return;
    //   }
    //   time -= 1;
    //   return `${minutes}:${seconds}`;
    // }, 1000);
    // setCount(interval);
    // console.log(interval);
    // //////////////////////////////////////////////////
    // const interval = setInterval(() => {
    //   let time = 180;
    //   const minutes = Math.floor(time / 60);
    //   const seconds = Number(String(time % 60).padStart(2, "0"));
    //   setMin(minutes);
    //   setSec(seconds);
    //   time -= 1;
    //   if (time <= 0) {
    //     return 0;
    //   }
    // }, 1000);
  };

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 10);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  return (
    <UserInfoUI
      isEmailCancel={isEmailCancel}
      isNameCancel={isNameCancel}
      name={name}
      inputRef={inputRef}
      emailRef={emailRef}
      bookerRef={bookerRef}
      email={email}
      // count={count}
      min={min}
      sec={sec}
      minutes={minutes}
      seconds={seconds}
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
