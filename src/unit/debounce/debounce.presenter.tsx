import { ChangeEvent } from "react";
import * as S from "./debounce.styles";
import { v4 as uuidv4 } from "uuid";
import { IBoard, IQuery } from "../../commons/types/generated/types";
import styled from "@emotion/styled";

interface PropsDebounceUI {
  text: string;
  //   onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  data?: Pick<IQuery, "fetchBoards">;
  onChangeDebounce: (event: ChangeEvent<HTMLInputElement>) => void;
  keyword: string;
  onChangeKeyword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickPagination: (event: ChangeEvent<HTMLSpanElement>) => void;
  bestBoards?: Pick<IQuery, "fetchBoardsOfTheBest">;
  isMatched: boolean;
}

const MyWord = styled.span`
  color: ${(props) => (props.isMatched ? "red" : "black")};
`;

export default function DebounceUI(props: PropsDebounceUI) {
  return (
    <S.Wrapper>
      <div>Hello World</div>
      <S.TextInput placeholder="search" onChange={props.onChangeKeyword} />
      <S.TextInput placeholder="debounce" onChange={props.onChangeDebounce} />
      {props.data?.fetchBoards.map((el: IBoard, index: number) => (
        <div key={uuidv4()}>
          <span>{index + 1}</span>
          <div>
            {el.title
              .replaceAll(props.keyword, `###${props.keyword}###`)
              .split("###")
              .map((el) => (
                <MyWord key={uuidv4()} isMatched={props.keyword === el}>
                  {el}
                </MyWord>
              ))}
          </div>
          <div>{el.writer}</div>
          <div>{el.contents}</div>
          {/* <img
            style={{ width: "120px", height: "120xp" }}
            src={`https://storage.googleapis.com/${el.images?.[0]}`}
          /> */}
          <div>{el.likeCount}</div>
          <div>{el.dislikeCount}</div>
        </div>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <S.Pagination key={uuidv4()} onClick={props.onClickPagination}>
          {index + 1}
        </S.Pagination>
      ))}
      <div>===============================================================</div>
      <div>
        {new Array(5).fill(1).map((_, index) => (
          <>
            <span>{index + 1}</span>
            <div>Name: EunKuk Kim</div>
            <div>Age: 31</div>
            <div>Gender: Male</div>
            <div>Married: No</div>
          </>
        ))}
      </div>
      <div>===============================================================</div>
      {props.bestBoards?.fetchBoardsOfTheBest.map((el, index) => (
        <div key={uuidv4()}>
          <span>{index + 10}</span>
          <span>
            {el.title
              .replaceAll(props.keyword, `###${props.keyword}###`)
              .split("###")
              .map((el) => (
                <S.BestTitle key={uuidv4()} style={{ fontSize: "10px" }}>
                  {el}
                </S.BestTitle>
              ))}
          </span>
          <div style={{ backgroundColor: "blue" }}>{el.title}</div>
          <div>{el.writer}</div>
          <div>{el.contents}</div>
        </div>
      ))}
    </S.Wrapper>
  );
}
