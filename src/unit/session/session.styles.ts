import styled from "@emotion/styled";
import { IPropsDisabled } from "./session.types";

export const Wrapper = styled.div`
  width: 800px;
  height: 600px;
  border: 1px solid #000;
  margin: 20px auto;
`;

export const Title = styled.h2`
  padding: 12px;
`;

export const UserWrapper = styled.div`
  border: 1px solid #000;
  background-color: FAFAFA;
  width: 600px;
  height: 260px;
  margin: 10px auto;
`;

export const UserTitle = styled.h3`
  margin-left: 12px;
`;

export const UserNameWrapper = styled.div`
  background-color: lightblue;
  margin: 12px;
`;

export const UserNameInput = styled.input`
  width: 330px;
  padding: 8px;
  ::placeholder {
    opacity: 0.4;
  }
`;

export const UserPhoneWrapper = styled.div`
  background-color: lightgreen;
  margin: 12px;
`;

export const UserPhoneInput = styled.input`
  width: 330px;
  padding: 8px;
  ::placeholder {
    opacity: 0.4;
  }
`;

export const AreaCodeWrapper = styled.div`
  background-color: beige;
  margin: 12px;
`;

export const AreaCodeSelect = styled.select`
  width: 330px;
  padding: 8px;
`;

// export const AreaCodeOptions = styled.option`
//   background-color: FAFAFA !important;
//   width: 400px;
//   color: red;
//   option:hover {
//     background-color: green;
//   }
// `;

export const USerEmailWrapper = styled.div`
  background-color: khaki;
  margin: 12px;
`;

export const UserEmailInput = styled.input`
  width: 330px;
  padding: 8px;
  ::placeholder {
    opacity: 0.4;
  }
`;

export const SubmitButton = styled.button`
  width: 220px;
  height: 40px;
  :hover {
    cursor: pointer;
  }
  background-color: ${(props: IPropsDisabled) =>
    props.isDisabled ? "" : "#fffec8"};
`;

export const EditButton = styled.button`
  width: 220px;
  height: 40px;
  :hover {
    cursor: pointer;
  }
`;
