import ButtonStatusUIItems from "./button.status.presenterItem";
import * as S from "./button-status.styles";

export default function ButtonStatusUI(props) {
  return (
    <S.Wrapper>
      <S.Title>Button Status</S.Title>
      {props.booksList.map((el, index) => (
        <ButtonStatusUIItems
          key={el.id}
          el={el}
          index={index}
          id={el.id}
          onClickRent={props.onClickRent(el.id)}
          selectId={props.selectId}
          isRent={props.isRent}
        />
      ))}
    </S.Wrapper>
  );
}
