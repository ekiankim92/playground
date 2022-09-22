import * as S from "./spin.styles";
import Spinner from "../../../pages/spin";

export default function SpinUI(props) {
  return (
    <S.Wrapper>
      <S.Title>Loading Page</S.Title>
      {props.isLoading ? (
        <Spinner />
      ) : (
        <S.PostWrapper>
          {props.posts.map((el, index) => (
            <S.CardWrapper key={index}>
              <div>{el.id}</div>
              <S.CardTitle>{el.title}</S.CardTitle>
              <S.CardBody>{el.body}</S.CardBody>
            </S.CardWrapper>
          ))}
        </S.PostWrapper>
      )}
    </S.Wrapper>
  );
}
