import { useRef, useState } from "react";
import * as S from "./list-css";

export default function DiaryListItems(props) {
  const { author, content, emotion, createdDate, id } = props.el;

  const [isEdit, setIsEdit] = useState(false);
  const [localContents, setLocalContents] = useState(content);

  const focusRef = useRef(null);

  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  const onChangeText = (event) => {
    setLocalContents(event.target.value);
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContents(content);
  };

  const handleEdit = () => {
    if (localContents.length < 5) {
      focusRef.current.focus();
      return;
    }

    if (window.confirm(`${id}번 째 일기를 수정하시겠습니까?`)) {
      props.onClickEdit(id, localContents);
      toggleIsEdit();
    }
  };

  return (
    <S.Wrapper>
      <S.ListWrapper>
        <S.ListHeaderWrapper>
          <div>Author: {author} |</div>
          <div>Emotion Score:{emotion}</div>
        </S.ListHeaderWrapper>
        <S.CreateDate>{createdDate}</S.CreateDate>
        {isEdit ? (
          <textarea
            value={localContents}
            onChange={onChangeText}
            ref={focusRef}
          />
        ) : (
          <S.Contents>{content}</S.Contents>
        )}
        <S.ButtonWrapper>
          {isEdit ? (
            <>
              <S.Button onClick={handleQuitEdit}>수정 취소</S.Button>
              <S.Button onClick={handleEdit}>수정 완료</S.Button>
            </>
          ) : (
            <>
              <S.DeleteButton onClick={props.onClickDelete}>
                Delete
              </S.DeleteButton>
              <S.EditButton onClick={toggleIsEdit}>Edit</S.EditButton>
            </>
          )}
        </S.ButtonWrapper>
      </S.ListWrapper>
    </S.Wrapper>
  );
}
