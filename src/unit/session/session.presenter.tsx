import * as S from "./session.styles";
import { IPropsSession } from "./session.types";
import Select from "react-select";
import { useState } from "react";

export default function SessionUI(props: IPropsSession) {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: "southkorea", label: "South Korea (+82)" },
    { value: "china", label: "China (+86)" },
    { value: "germany", label: "Germany (+49)" },
    { value: "japan", label: "Japan (+81)" },
    { value: "us", label: "United States (+1)" },
  ];

  return (
    <S.Wrapper>
      <S.Title>Session Page</S.Title>
      <S.UserWrapper>
        {props.isEdit ? (
          <S.UserTitle>예약자 수정</S.UserTitle>
        ) : (
          <S.UserTitle>예약자 정보</S.UserTitle>
        )}
        <S.UserNameWrapper>
          {props.isBrowser && (
            <S.UserNameInput
              type="text"
              placeholder="User name"
              name="name"
              onChange={props.onChangeInputs}
              defaultValue={JSON.parse(sessionStorage.getItem("name"))}
            />
          )}
        </S.UserNameWrapper>
        <S.UserPhoneWrapper>
          {props.isBrowser && (
            <S.UserPhoneInput
              type="tel"
              placeholder="Phone number"
              name="phone"
              onChange={props.onChangeInputs}
              defaultValue={
                JSON.parse(sessionStorage.getItem("phone")) || props.phone
              }
            />
          )}
        </S.UserPhoneWrapper>
        <S.AreaCodeWrapper>
          <S.AreaCodeSelect id="phone">
            <option value="australia">Australia (+61)</option>
            <option value="brazil">Brazil (+55)</option>
            <option value="china">China (+86)</option>
            <option value="korea" selected>
              South Korea (+82)
            </option>
            <option value="germany">Germany (+49)</option>
            <option value="japan">Japan (+81)</option>
            <option value="US">United States (+1)</option>
          </S.AreaCodeSelect>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
          />
        </S.AreaCodeWrapper>
        <S.USerEmailWrapper>
          {props.isBrowser && (
            <S.UserEmailInput
              type="email"
              placeholder="Email"
              name="email"
              onChange={props.onChangeInputs}
              defaultValue={JSON.parse(sessionStorage.getItem("email"))}
            />
          )}
        </S.USerEmailWrapper>
        <S.SubmitButton
          disabled={props.isDisabled}
          onClick={props.onClickSubmit}
          isDisabled={props.isDisabled}
        >
          예약하기
        </S.SubmitButton>
        <S.EditButton onClick={props.onClickEdit}>수정하기</S.EditButton>
      </S.UserWrapper>
    </S.Wrapper>
  );
}
