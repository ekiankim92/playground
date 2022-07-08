import * as S from "./button-status.styles";

export default function ButtonStatusUIItems(props) {
  console.log("props.index:", props.index);
  console.log("props.id:", props.id);
  console.log("props.isRent:", props.isRent);

  const { name, author } = props.el;

  return (
    <S.Container>
      <S.AuthorWrapper>
        <S.Label>Author:</S.Label>
        <div>{author}</div>
      </S.AuthorWrapper>
      <S.NameWrapper>
        <S.Label>Name:</S.Label>
        <div>{name}</div>
      </S.NameWrapper>
      <S.RentButton onClick={props.onClickRent} isRent={props.isRent}>
        {props.id === props.selectId ? "Rented" : "Rent"}
      </S.RentButton>
    </S.Container>
  );
}
