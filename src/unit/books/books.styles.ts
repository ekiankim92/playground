import styled from "@emotion/styled";
import { Pagination } from "antd";
import { PropsStyles } from "./books.types";

export const Container = styled.div`
  width: 1400px;
  margin: 40px auto;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const SearchWrapper = styled.div`
  width: 1300px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const SearchImg = styled.img`
  width: 34px;
  height: 34px;
  background-color: #ececec;
  :hover {
    cursor: pointer;
  }
`;

export const SearchInput = styled.input`
  width: 220px;
  height: 34px;
  font-size: 20px;
  padding: 10px;
`;

export const TableHead = styled.div`
  width: 1200px;
  height: 52px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 30px auto 0px auto;
  font-weight: 600;
  background-color: #dedede;
`;

export const TableDataWrapper = styled.div`
  width: 1200px;
  margin: 0px auto;
`;

export const TableData = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 52px;
  border-bottom: 1px solid #dedede;
  :hover {
    opacity: 0.5;
  }
`;

export const IndexNo = styled.div`
  width: 80px;
  padding-right: 12px;
  padding-left: 20px;
`;

export const BookName = styled.div`
  width: 200px;
  text-align: center;
`;

export const Author = styled.div`
  width: 148px;
  width: 184px;
  padding-left: 24px;
`;

export const DueDate = styled.div`
  width: 180px;
  padding-left: 10px;
`;

export const RentButton = styled.button`
  color: #fff;
  background-color: #000;
  width: 60px;
  height: 24px;
  border: none;
  :hover {
    cursor: pointer;
  }
  background-color: ${(props: PropsStyles) =>
    props.isRent ? "#accbff" : "#000"};
`;

export const Paginations = styled(Pagination)`
  display: flex;
  justify-content: center;
  margin: 22px;
`;

export const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ModalRentButton = styled.button`
  width: 120px;
  height: 40px;
  border: none;
  color: #fff;
  background-color: #accbff;
  margin-right: 40px;
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const ModalCancelButton = styled.button`
  width: 120px;
  height: 40px;
  border: none;
  color: #fff;
  background-color: #000;
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const ModalTitle = styled.h2`
  text-align: center;
`;

export const ModalContainer = styled.div`
  width: 360px;
  height: 260px;
  border: 1px solid #dedede;
  margin: 20px auto;
  border-radius: 6px;
  display: flex;
`;

export const ModalContainerTitles = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #dedede;
`;

export const ModalContainerTitlesInfo = styled.div`
  font-size: 22px;
  margin: 8px;
`;

export const BottomLine = styled.hr`
  width: 100%;
  border-color: #dedede;
`;

export const ModalContainerInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #dedede;
`;

export const ModalInfoName = styled.div`
  width: 180px;
  font-size: 22px;
  margin: 8px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ModalInfoAuthor = styled.div`
  width: 180px;
  font-size: 22px;
  margin: 8px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ModalInfoRentDate = styled.div`
  width: 180px;
  font-size: 22px;
  margin: 8px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ModalInfoDueDate = styled.div`
  width: 180px;
  font-size: 22px;
  margin: 8px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
