import DebounceUI from "./debounce.presenter";
import _ from "lodash";
import { ChangeEvent, useState } from "react";
import { FETCH_BOARDS, BEST_BOARDS } from "./debounce.queries";
import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../commons/types/generated/types";

export default function Debounce() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: bestBoards } = useQuery(BEST_BOARDS);

  const [text, setText] = useState("");

  const [keyword, setKeyword] = useState("");

  const getDebounce = _.debounce((data) => {
    refetch({
      search: data,
      page: 1,
    });
    setKeyword(data);
    console.log(data);
  }, 500);

  const onChangeKeyword = (event) => {
    getDebounce(event.target.value);
  };

  const onChangeDebounce = _.debounce(
    (event: ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
      console.log(event.target.value);
    },
    500
  );

  const onClickPagination = (event: ChangeEvent<HTMLSpanElement>) => {
    refetch({
      search: keyword,
      page: Number(event.target.id),
    });
    console.log("id:", Number(event.target.id));
    console.log("keyword:", keyword);
  };

  return (
    <DebounceUI
      text={text}
      //   onChangeSearch={onChangeSearch}
      data={data}
      onChangeDebounce={onChangeDebounce}
      keyword={keyword}
      onChangeKeyword={onChangeKeyword}
      onClickPagination={onClickPagination}
      bestBoards={bestBoards}
    />
  );
}
