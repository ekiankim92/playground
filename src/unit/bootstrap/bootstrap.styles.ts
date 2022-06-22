import styled from "@emotion/styled";
import { Pagination } from "react-bootstrap";

export const Wrapper = styled.div`
  width: 1000px;
  height: 800px;
  border: 1px solid #000;
  margin: 20px auto;
`;

export const Title = styled.h2`
  padding: 12px;
`;

export const Paginations = styled(Pagination)`
  display: flex;
  justify-content: center;
`;
