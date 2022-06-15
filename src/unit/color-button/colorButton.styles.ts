import styled from "@emotion/styled";
import { IPropsBoolean } from "./colorButton.types";

export const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  border: 1px solid #000;
  margin: 20px auto;
`;

export const Title = styled.h2`
  padding: 12px;
`;

export const Welcome = styled.div`
  padding: 12px;
`;

export const WelcomeSpan = styled.span`
  font-size: 20px;
  font-weight: 700;
  text-decoration: underline;
`;

export const Label = styled.label`
  padding: 12px;
`;

export const InputWrapper = styled.div`
  margin: 20px 0px 10px 12px;
`;

export const Input = styled.input`
  width: 260px;
  height: 38px;
  padding: 6px;
  font-size: 18px;
`;

export const ButtonWrapper = styled.div`
  margin-left: 12px;
`;

export const SubmitButton = styled.button`
  width: 260px;
  height: 34px;
  border: none;
  border-radius: 4px;
  :hover {
    cursor: pointer;
    background-color: ${(props: IPropsBoolean) => (props.isRed ? "red" : "")};
    background-color: ${(props: IPropsBoolean) =>
      props.isMatch ? "#ee82ee" : ""};
  }
`;
