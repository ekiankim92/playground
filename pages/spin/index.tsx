import ScaleLoader from "react-spinners/ScaleLoader";
import { CSSProperties } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5e5e5e;
  z-index: 1;
  opacity: 0.3;
`;

export default function Spinner() {
  const Override: CSSProperties = {
    position: "absolute",
  };

  return (
    <Wrapper>
      <ScaleLoader
        cssOverride={Override}
        width={16}
        height={45}
        color={"#fff"}
      />
    </Wrapper>
  );
}
