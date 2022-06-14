import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import SessionUI from "./session.presenter";
import "antd/dist/antd.css";

export default function Session() {
  const [inputs, setInputs] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const { name, phone, email } = inputs;

  const [isDisabled, setIsDisabled] = useState(true);

  const router = useRouter();

  const [isBrowser, setIsBrowser] = useState(false);

  const [isEdit, setIsEdit] = useState(false);

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, phone, email } = inputs;
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
    if (name && phone && email) {
      setIsDisabled(false);
    }
  };

  const onClickSubmit = () => {
    const { name, phone, email } = inputs;
    if (!name || !phone || !email) {
      Modal.warn({ content: "please fill in the information" });
      return;
    }

    sessionStorage.setItem("name", JSON.stringify(name));
    sessionStorage.setItem("phone", JSON.stringify(phone));
    sessionStorage.setItem("email", JSON.stringify(email));

    console.log("name:", name);
    console.log("phone:", phone);
    console.log("email:", email);

    const result = confirm("등록이 되셨습니다. 페이지 이동을 하시겠습니까?");
    if (result) {
      router.push("/");
    } else {
      console.log("no page move");
    }
  };

  //   const defaultName = JSON.parse(sessionStorage.getItem("name") || "");
  // const defaultPhone = JSON.parse(sessionStorage.getItem("phone") || "");

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const onClickEdit = () => {
    const { name, phone, email } = inputs;

    setIsEdit(true);

    // if (!name) {
    //   console.log(JSON.parse(sessionStorage.getItem("name")));
    // } else if (name) {
    //   sessionStorage.setItem("name", JSON.stringify(name));
    // }

    if (name) {
      sessionStorage.setItem("name", JSON.stringify(name));
    } else if (!name) {
      JSON.parse(sessionStorage.getItem("name"));
    }

    if (phone) {
      sessionStorage.setItem("phone", JSON.stringify(phone));
    } else if (!phone) {
      JSON.parse(sessionStorage.getItem("name"));
    }

    // if (!email) {
    //   JSON.parse(sessionStorage.getItem("name"));
    // } else if (email) {
    //   sessionStorage.setItem("email", JSON.stringify(email));
    // }

    if (email) {
      sessionStorage.setItem("email", JSON.stringify(email));
    } else if (!email) {
      JSON.parse(sessionStorage.getItem("name"));
    }

    // sessionStorage.setItem("name", JSON.stringify(name));
    // sessionStorage.setItem("phone", JSON.stringify(phone));
    // sessionStorage.setItem("email", JSON.stringify(email));

    console.log("JSON.name:", JSON.parse(sessionStorage.getItem("name")));
    console.log("JSON.phone:", JSON.parse(sessionStorage.getItem("phone")));
    console.log("JSON.email:", JSON.parse(sessionStorage.getItem("email")));

    console.log("name:", name);
    console.log("phone:", phone);
    console.log("email:", email);

    if (name || phone || email) router.push("/");
  };

  return (
    <SessionUI
      onChangeInputs={onChangeInputs}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      isDisabled={isDisabled}
      name={name}
      email={email}
      phone={phone}
      isBrowser={isBrowser}
      isEdit={isEdit}
    />
  );
}
