import * as S from "./context.styles";
import { GlobalContext } from "../../../pages/_app";
import { useContext } from "react";

export default function ContextUI() {
  const { isContext } = useContext(GlobalContext);

  console.log("isContext:", isContext);
  console.log("!isContext:", !isContext);

  return (
    <S.Wrapper>
      <S.Title>useContext Practice</S.Title>
      <div>This is the content</div>
      <div>This will show the content</div>
      <div>Does the useContext show here</div>
      {isContext && (
        <>
          <div>THIS WILL NOW SHOW IN THE CONTENT</div>
          <div>USECONTEXT WILL NOT SHOW HERE</div>
        </>
      )}
    </S.Wrapper>
  );
}
