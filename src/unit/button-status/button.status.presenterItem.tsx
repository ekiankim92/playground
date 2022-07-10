import { useState } from "react";
import * as S from "./button-status.styles";

// 여기서  state 을 선언해야지 제 각각의 element 가 바뀜
// if state was declared in the container component(parent) then it is
// considered as the lifting state up

export default function ButtonStatusUIItems(props) {
  //   console.log("props.index:", props.index);
  //   console.log("props.id:", props.id);
  //   console.log("props.isRent:", props.isRent);

  const { name, author } = props.el;

  const [isTrue, setIsTrue] = useState(false);

  const onClickTesting = () => {
    // console.log("id");
    setIsTrue(true);
    console.log("isTrue:", isTrue);
  };

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
      <button
        onClick={onClickTesting}
        style={{ backgroundColor: isTrue ? "red" : "#fefefe" }}
      >
        빌리기
      </button>
    </S.Container>
  );
}
