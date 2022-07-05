import * as S from "./books.styles";
import { PropsBooks } from "./books.types";
import { v4 as uuidv4 } from "uuid";
import "antd/dist/antd.css";
import { Modal } from "antd";

export default function BooksUI(props: PropsBooks) {
  return (
    <S.Container>
      <S.Title>Books List</S.Title>
      <S.SearchWrapper>
        <S.SearchImg src="/search.png/" />
        <S.SearchInput />
      </S.SearchWrapper>
      <S.TableHead>
        <span>No.</span>
        <span>Name</span>
        <span>Author</span>
        <span>Due Date</span>
        <span>Rent</span>
      </S.TableHead>
      {props.isPage ? (
        // page 2 of pagination
        <S.TableDataWrapper>
          {props.secondPortion.map((el: any, index: number) => (
            <S.TableData key={uuidv4()}>
              <S.IndexNo>{index + 11}</S.IndexNo>
              <S.BookName>{el.name}</S.BookName>
              <S.Author>{el.author}</S.Author>
              <S.DueDate>2022.06.23</S.DueDate>
              <S.RentButton onClick={props.showModal(el.id)}>Rent</S.RentButton>
            </S.TableData>
          ))}
        </S.TableDataWrapper>
      ) : (
        // page 1 of pagination
        <S.TableDataWrapper>
          {props.booksList
            .map((el: any, index: number) => (
              <S.TableData key={uuidv4()}>
                <S.IndexNo>{index + 1}</S.IndexNo>
                <S.BookName>{el.name}</S.BookName>
                <S.Author>{el.author}</S.Author>
                <S.DueDate>2022.06.23</S.DueDate>
                <S.RentButton
                  onClick={props.showModal(el.id)}
                  isRent={props.isRent}
                >
                  Rent
                </S.RentButton>
              </S.TableData>
            ))
            .slice(0, 10)}
        </S.TableDataWrapper>
      )}
      <Modal
        visible={props.isModalVisible}
        onOk={props.handleOk}
        onCancel={props.handleCancel}
        footer={[
          <S.ModalButtonWrapper key="0">
            <S.ModalRentButton key="1" onClick={props.handleOk}>
              Rent
            </S.ModalRentButton>
            <S.ModalCancelButton key="2" onClick={props.handleCancel}>
              Cancel
            </S.ModalCancelButton>
          </S.ModalButtonWrapper>,
        ]}
      >
        <S.ModalTitle>Rent a book</S.ModalTitle>
        <S.ModalContainer>
          <S.ModalContainerTitles>
            <S.ModalContainerTitlesInfo>Name</S.ModalContainerTitlesInfo>
            <S.BottomLine />
            <S.ModalContainerTitlesInfo>Author</S.ModalContainerTitlesInfo>
            <S.BottomLine />
            <S.ModalContainerTitlesInfo>
              Rent start date
            </S.ModalContainerTitlesInfo>
            <S.BottomLine />
            <S.ModalContainerTitlesInfo>
              Rent end date
            </S.ModalContainerTitlesInfo>
          </S.ModalContainerTitles>
          <div>
            {props.bookDetail.map((el: any) => (
              <S.ModalContainerInfo key={uuidv4()}>
                <S.ModalInfoName>{el.name}</S.ModalInfoName>
                <S.BottomLine />
                <S.ModalInfoAuthor>{el.author}</S.ModalInfoAuthor>
                <S.BottomLine />
                <S.ModalInfoRentDate>Rent date</S.ModalInfoRentDate>
                <S.BottomLine />
                <S.ModalInfoDueDate>Due date</S.ModalInfoDueDate>
              </S.ModalContainerInfo>
            ))}
          </div>
        </S.ModalContainer>
      </Modal>
      <S.Paginations
        current={props.current}
        onChange={props.onChangePagination}
        total={20}
      />
    </S.Container>
  );
}
