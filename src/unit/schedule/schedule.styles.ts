import styled from "@emotion/styled";
import { Calendar } from "react-big-calendar";

export const Wrapper = styled.div``;

export const ScheduleCalendar = styled(Calendar)`
  width: 80vw;
  height: 80vh;
  margin: 40px auto;
  :hover {
    cursor: pointer;
  }
`;
