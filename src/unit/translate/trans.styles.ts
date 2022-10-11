import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Title = styled.h2`
  padding: 6px;
`;

export const FlagsWrapper = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-around;
`;

export const Icons = styled(FontAwesomeIcon)`
  width: 40px;
  height: 40px;
  :hover {
    cursor: pointer;
  }
`;
