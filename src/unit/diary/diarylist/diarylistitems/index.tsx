import { useState } from "react";
import * as S from "./list-css";

export default function DiaryListItems(props) {
  const { author, content, emotion, createdDate, id } = props.el;

  const [isEdit, setIsEdit] = useState(false);

  return (
    <S.Wrapper>
      <S.ListWrapper>
        <S.ListHeaderWrapper>
          <div>Author: {author} |</div>
          <div>Emotion Score:{emotion}</div>
        </S.ListHeaderWrapper>
        <S.CreateDate>{createdDate}</S.CreateDate>
        <S.Contents>{content}</S.Contents>
        <S.ButtonWrapper>
          {isEdit ? (
            <>
              <button>Cancel</button>
              <button>Submit</button>
            </>
          ) : (
            <>
              <S.DeleteButton onClick={props.onClickDelete}>
                Delete
              </S.DeleteButton>
              <S.EditButton>Edit</S.EditButton>
            </>
          )}
        </S.ButtonWrapper>
      </S.ListWrapper>
    </S.Wrapper>
  );
}
