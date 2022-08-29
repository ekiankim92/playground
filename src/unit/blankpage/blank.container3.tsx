import { Checkbox } from "@mui/material";
import styled from "@emotion/styled";
import { ChangeEvent, useEffect, useState } from "react";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Wrapper = styled.div`
  width: 550px;
  height: 550px;
  margin: 40px auto;
  border: 1px solid #000;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
`;

const NameInput = styled.input`
  width: 240px;
  height: 40px;
`;

const SaveBox = styled.input`
  width: 40px;
  height: 40px;
`;

export default function Blank3() {
  const [userId, setUserId] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const onChangeUserId = (event: ChangeEvent<HTMLInputElement>) => {
    setUserId(event.target.value);
    console.log("event.target.value:", event.target.value);
  };

  const onChangeCheckBox = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("event.target.checked:", event.target.checked);
    console.log("event.target.value:", event.target.value);

    if (!userId && event.target.checked === true) {
      return alert("please enter your id");
    }

    if (event.target.checked === true) {
      setIsChecked(true);
      localStorage.setItem("userId", JSON.stringify(userId));
      localStorage.setItem("isChecked", JSON.stringify(true));
    } else {
      setIsChecked(false);
      localStorage.setItem("isChecked", JSON.stringify(false));
      localStorage.removeItem("userId");
    }
  };

  useEffect(() => {
    const savedId = JSON.parse(localStorage.getItem("userId"));
    setUserId(savedId);
    console.log("savedI:", savedId);
  }, []);

  useEffect(() => {
    const newCheckBox = JSON.parse(localStorage.getItem("isChecked"));
    setIsChecked(newCheckBox);
    console.log("newCheckbox:", newCheckBox);
  }, []);

  return (
    <Wrapper>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} defaultChecked color="secondary" />
      <Checkbox {...label} defaultChecked color="success" />
      <Checkbox {...label} defaultChecked color="default" />
      <hr />
      <div>Checkbox</div>
      <Container>
        <NameInput
          type="text"
          name="userId"
          onChange={onChangeUserId}
          value={userId || ""}
        />
        <SaveBox
          type="checkbox"
          name="savebox"
          onChange={onChangeCheckBox}
          checked={isChecked}
        />
      </Container>
    </Wrapper>
  );
}
