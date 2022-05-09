import * as S from "./scroll.styles";
import { IPropsScroll } from "./scroll.types";
import { v4 as uuid4 } from "uuid";
import InfiniteScroll from "react-infinite-scroller";

export default function InfiniteScrollUI(props: IPropsScroll) {
  return (
    <>
      <S.Wrapper>
        <S.Title>Boards</S.Title>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          window={true}
        >
          {props.data?.fetchBoards.map((el, index) => (
            <S.BoardsWrapper key={uuid4()}>
              <span>{index + 1}</span>
              <div>{el.writer}</div>
              <div>{el.title}</div>
              <div>{el.contents}</div>
              <S.BoardsImages
                src={`https://storage.googleapis.com/${el.images?.[0]}`}
                onError={props.onError}
              />
            </S.BoardsWrapper>
          ))}
        </InfiniteScroll>
        <S.MoreButton onClick={props.onLoadMore}>
          ------SHOW MORE------
        </S.MoreButton>
      </S.Wrapper>
    </>
  );
}
