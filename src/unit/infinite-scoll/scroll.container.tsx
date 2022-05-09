import { useQuery } from "@apollo/client";
import { ChangeEvent } from "react";
import InfiniteScrollUI from "./scroll.presenter";
import { FETCH_BOARDS } from "./scroll.queries";

export default function InfiniteScroll() {
  const { data, fetchMore } = useQuery(FETCH_BOARDS);

  const onLoadMore = () => {
    if (!data) return;
    setTimeout(() => {
      fetchMore({
        variables: {
          page: Math.ceil(data?.fetchBoards.length / 10) + 1,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult?.fetchBoards)
            return { fetchBoards: [...prev.fetchBoards] };
          return {
            fetchBoards: [...prev.fetchBoards, ...fetchMoreResult?.fetchBoards],
          };
        },
      });
    }, 2000);
    console.log("Load more after 2 seconds");
  };

  const onError = (event: ChangeEvent<HTMLImageElement>) => {
    event.target.src = "/toy4.png";
  };

  return (
    <InfiniteScrollUI data={data} onLoadMore={onLoadMore} onError={onError} />
  );
}
