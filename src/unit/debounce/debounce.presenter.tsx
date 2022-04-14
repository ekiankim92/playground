import { ChangeEvent } from "react";
import * as S from "./debounce.styles";
import { v4 as uuidv4 } from "uuid";
import { IBoard, IQuery } from "../../commons/types/generated/types";

interface PropsDebounceUI {
  text: string;
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  data?: Pick<IQuery, "fetchBoards">;
}

export default function DebounceUI(props: PropsDebounceUI) {
  return (
    <S.Wrapper>
      <div>Hello World</div>
      <S.TextInput placeholder="search" onChange={props.onChangeInput} />
      <S.TextInput placeholder="debounce" onChange={props.onChangeDebounce} />
      {props.data?.fetchBoards.map((el: IBoard, index: number) => (
        <div key={uuidv4()}>
          <span>{index + 1}</span>
          <div>{el.title}</div>
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
      ===============================================================
      {new Array(5).fill(1).map((_, index) => (
        <>
          <span>{index + 1}</span>
          <div>Name: EunKuk Kim</div>
          <div>Age: 31</div>
          <div>Gender: Male</div>
          <div>Married: No</div>
        </>
      ))}
    </S.Wrapper>
  );
}
