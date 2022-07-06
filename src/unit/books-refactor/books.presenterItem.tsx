import * as S from "./books.styles";
import { PropsBooksUIItems } from "./books.types";

export default function BooksUIItems(props: PropsBooksUIItems) {
  const { name, author } = props.el;
  const { index } = props;

  return (
    <>
      <div>{index + 1}</div>
      <div>{name}</div>
      <div>{author}</div>
      <div>2022.07.05</div>
      <S.RentButton
        id={props.el.id}
        onClick={props.onClickRent}
        isRent={props.isRent}
        elementId={props.elementId}
      >
        {props.elementId === props.el.id ? "Rented" : "Rent"}
      </S.RentButton>
    </>
  );
}
