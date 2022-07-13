import styled from "@emotion/styled";
import { PropsColors } from "./tabs.types";

export const Container = styled.div`
  width: 1300px;
  margin: 20px auto;
`;

export const Title = styled.h2`
  padding: 16px;
`;

export const TabWrapper = styled.div`
  width: 240px;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const BasicTab = styled.div`
  font-size: 18px;
  color: ${(props: PropsColors) => (props.isBasic ? "gray" : "#000")};
  text-decoration: ${(props: PropsColors) =>
    props.isBasic ? "underline" : "none"};
  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

export const SmartTab = styled.div`
  font-size: 18px;
  color: ${(props: PropsColors) => (props.isSmart ? "gray" : "#000")};
  text-decoration: ${(props: PropsColors) =>
    props.isSmart ? "underline" : "none"};
  :hover {
    cursor: pointer;
    text-decoration: underline;
    opacity: 0.6;
  }
`;

export const GoldTab = styled.div`
  font-size: 18px;
  color: ${(props: PropsColors) => (props.isGold ? "gray" : "#000")};
  text-decoration: ${(props: PropsColors) =>
    props.isGold ? "underline" : "none"};
  :hover {
    cursor: pointer;
    text-decoration: underline;
    opacity: 0.6;
  }
`;

export const AllTab = styled.div`
  font-size: 18px;
  color: ${(props: PropsColors) => (props.isAll ? "gray" : "#000")};
  text-decoration: ${(props: PropsColors) =>
    props.isAll ? "underline" : "none"};
  :hover {
    cursor: pointer;
    text-decoration: underline;
    opacity: 0.6;
  }
`;

export const Section = styled.section`
  width: 1300px;
  margin: 0px auto;
`;

export const DataTable = styled.table`
  width: 1300px;
  padding: 4px;
`;

export const TableRow = styled.tr`
  height: 32px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #eee;
`;

export const TableNumber = styled.td`
  width: 60px;
  text-align: end;
`;

export const TableReservation = styled.td`
  width: 240px;
  text-align: center;
`;

export const TableName = styled.td`
  width: 80px;
  text-align: center;
`;

export const TableAmount = styled.td`
  width: 140px;
  text-align: end;
`;

export const TablePayment = styled.td`
  width: 180px;
  text-align: end;
`;
