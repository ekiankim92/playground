import styled from "@emotion/styled";
import { ChangeEvent } from "react";

interface PropsButton02 {
  width?: string;
  height?: string;
  borderRadius?: string;
  around?: string;
  padding?: string;
  color?: string;
  change?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const NomalInput = styled.input`
  width: ${(props: PropsButton02) => props.width};
  height: ${(props: PropsButton02) => props.height};
  padding: ${(props) => props.around};
  border-radius: ${(props: PropsButton02) => props.borderRadius};
  ::placeholder {
    opacity: 0.6;
  }
  color: ${(props) => props.color};
  :focus {
    outline: none;
    border: 1px solid red;
  }
`;

export default function Button02(props: PropsButton02) {
  return (
    <>
      <div>Hello World</div>
      <NomalInput
        onChange={props.change}
        placeholder="this is the normal input"
        width={props.width}
        height={props.height}
        borderRadius={props.borderRadius}
        around={props.around}
        color={props.color}
      />
    </>
  );
}
