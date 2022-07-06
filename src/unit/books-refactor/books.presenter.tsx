import BooksUIItems from "./books.presenterItem";
import * as S from "./books.styles";
import { PropsBooksUI } from "./books.types";

export default function BooksUI(props: PropsBooksUI) {
  return (
    <S.Container>
      <S.Title>Books List</S.Title>
      <S.TableHead>
        <span>No.</span>
        <span>Name</span>
        <span>Author</span>
        <span>Due date</span>
        <span>Rent</span>
      </S.TableHead>
      {props.booksList.map((el: any, index: number) => (
        <>
          <BooksUIItems
            key={index}
            el={el}
            index={index}
            isRent={props.isRent}
            onClickRent={props.onClickRent(el.id, index)}
            elementId={props.elementId}
          />
          {/* <S.RentButton
            key={el.id}
            onClick={props.onClickRent(el.id, index)}
            isRent={props.isRent}
            style={{ color: el.id === props.elementId ? "red" : "blue" }}
          >
            Rent
          </S.RentButton> */}
        </>
      ))}
    </S.Container>
  );
}
