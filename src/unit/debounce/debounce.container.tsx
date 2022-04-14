import DebounceUI from "./debounce.presenter";
import _ from "lodash";
import { ChangeEvent, useState } from "react";
import { FETCH_BOARDS } from "./debounce.queries";
import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../commons/types/generated/types";

export default function Debounce() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const [text, setText] = useState("");

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    console.log(event.target.value);
  };

  const onChangeDebounce = _.debounce(
    (event: ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
      console.log(event.target.value);
    },
    300
  );

  //   const getDebounce = _.debounce(() => {
  //     setText(onChangeInput);
  //   });

  return (
    <DebounceUI
      text={text}
      onChangeInput={onChangeInput}
      data={data}
      onChangeDebounce={onChangeDebounce}
    />
  );
}
