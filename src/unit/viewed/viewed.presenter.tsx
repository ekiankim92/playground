import * as S from "./viewed.styles";
import { v4 as uuidv4 } from "uuid";

export default function ViewUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.BestItemsWrapper>
          {props.bestItemData?.fetchUseditemsOfTheBest.map((el) => (
            <S.BestListWrapper key={uuidv4()}>
              <div>Name: {el.buyer.name}</div>
              <div>{el.name}</div>
              <div>Price: {el.price}</div>
              <S.BestImg
                src={`https://storage.googleapis.com/${el.images?.[0]}`}
              />
            </S.BestListWrapper>
          ))}
        </S.BestItemsWrapper>
        <S.SecondWrapper>
          <h3>Recently Viewed</h3>
          {props.recentView.map((el, index) => (
            <div key={uuidv4()}>
              <span>{index + 1}. </span>
              <img
                style={{ width: "50", height: "50px" }}
                src={`https://storage.googleapis.com/${el.images?.[0]}`}
              />
            </div>
          ))}
        </S.SecondWrapper>
        <S.Title>Items Lists</S.Title>
        <S.ListWrapper>
          {props.data?.fetchUseditems.map((el) => (
            <S.ItemWrapper key={uuidv4()}>
              <S.Img
                src={`https://storage.googleapis.com/${el.images?.[0]}`}
                onError={props.onError}
              />
              <div>{el.name}</div>
              <div>{el.price}</div>
              <S.ButtonWrapper>
                <S.Button onClick={props.onClickBasket(el)}>Bakset</S.Button>
              </S.ButtonWrapper>
            </S.ItemWrapper>
          ))}
        </S.ListWrapper>
      </S.Wrapper>
      <h2>Basket Page</h2>
      <S.BasketWrapper>
        <div>Basket List</div>
        {props.basketItem.map((el) => (
          <div key={uuidv4()}>
            <S.BasketImg
              src={`https://storage.googleapis.com/${el.images?.[0]}`}
            />
            <div>{el.name}</div>
            <div>{el.price}</div>
            <button onClick={props.onClickDelete(el._id)}>Delete</button>
          </div>
        ))}
      </S.BasketWrapper>
    </>
  );
}
