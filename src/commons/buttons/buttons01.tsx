import styled from "@emotion/styled";

interface IPropsButtons {
  color?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  onPress?: () => void;
  text?: string;
  fontSize?: string;
  backgroundColor?: string;
}

const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props: IPropsButtons) => props.color};
  width: ${(props: IPropsButtons) => props.width};
  height: ${(props: IPropsButtons) => props.height};
  border-radius: ${(props: IPropsButtons) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};
`;

const Text = styled.div`
  color: ${(props: IPropsButtons) => props.color};
  font-size: ${(props: IPropsButtons) => props.fontSize};
`;

export default function SubmitButton(props: IPropsButtons) {
  return (
    <>
      <div>Hello World</div>
      <SubmitBtn
        onClick={props.onPress}
        color={props.color}
        width={props.width}
        height={props.height}
        borderRadius={props.borderRadius}
        backgroundColor={props.backgroundColor}
      >
        <Text>{props.text}</Text>
      </SubmitBtn>
    </>
  );
}
