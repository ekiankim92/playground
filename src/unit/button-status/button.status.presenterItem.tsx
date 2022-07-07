import * as S from "./button-status.styles";

export default function ButtonStatusUIItems(props) {
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
      <S.RentButton onClick={props.onClickRent}>Rent</S.RentButton>
    </S.Container>
  );
}
