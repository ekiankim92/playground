import { ChangeEvent, useEffect, useState } from "react";
import FormUI from "./form.presenter";
import { Cookies } from "react-cookie";

export default function Form() {
  const test1 =
    "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,20}$";
  const test2 =
    "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,20}$";
  const test3 =
    /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{8,20}$/;
  const test4 =
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$";
  const test5 =
    "^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[d]){1,})(?=(.*[W]){1,})(?!.*s).{8,20}$";

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const cookies = new Cookies();

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const onClickSubmit = () => {
    alert("submit");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const language = window.navigator.language;
      //   localStorage.setItem("lang", language.slice(0, 2));
      cookies.set("lang", language.slice(0, 2));
    }
  }, []);

  return (
    <FormUI onChangeInputs={onChangeInputs} onClickSubmit={onClickSubmit} />
  );
}
