import styled from "@emotion/styled";
import { DatePicker } from "antd";

export const Wrapper = styled.div`
  width: 1000px;
  border: 1px solid #000;
  margin: 30px auto;
`;

export const Title = styled.h2`
  padding: 20px;
`;

export const RangePicker = styled(DatePicker)`
  width: 260px;
  height: 60px;
`;
