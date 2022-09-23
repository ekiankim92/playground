import styled from "@emotion/styled";
import { Calendar } from "react-big-calendar";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const Title = styled.h1`
  padding: 8px;
`;

export const CalendarWrapper = styled.div`
  width: 80%;
  height: 80%;
  margin: auto;
`;

export const ReactCalendar = styled(Calendar)`
  width: 100%;
  height: 100%;
`;

export const Input = styled.input`
  width: 240px;
  height: 40px;
  padding: 8px;
  font-size: 18px;
  ::placeholder {
    opacity: 0.8;
  }
`;

export const Submit = styled.button`
  width: 240px;
  height: 40px;
  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
