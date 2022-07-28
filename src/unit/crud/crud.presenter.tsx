import * as S from "./crud.styles";
import { v4 as uuidv4 } from "uuid";

export default function CrudUI(props) {
  console.log("list:", props.list);
  return (
    <S.Wrapper>
      <S.Title>CRUD Practice</S.Title>
      <S.FormContainer>
        <S.FormWrapper>
          <input
            placeholder="name"
            name="name"
            onChange={props.onChangeInputs}
            defaultValue={props.name || ""}
          />
          <input
            placeholder="age"
            name="age"
            onChange={props.onChangeInputs}
            defaultValue={props.age || ""}
          />
          <input
            placeholder="gender"
            name="gender"
            onChange={props.onChangeInputs}
            defaultValue={props.gender || ""}
          />
          <button onClick={props.onClickSubmit}>Submit</button>
        </S.FormWrapper>
        {props.isEdit && (
          <S.FormWrapper>
            <input
              placeholder="edit name"
              name="newName"
              onChange={props.onChangeUpdated}
            />
            <input
              placeholder="edit age"
              name="newAge"
              onChange={props.onChangeUpdated}
            />
            <input
              placeholder="edit gender"
              name="newGender"
              onChange={props.onChangeUpdated}
            />
            <button onClick={props.onClickConfirmUpdate}>Update</button>
            <button onClick={props.onClickCancel}>Cancel</button>
          </S.FormWrapper>
        )}
      </S.FormContainer>
      <S.ListWrapper>
        {props.list.map((el: any, index: number) => (
          <S.InnerWrapper key={uuidv4()}>
            <div>{index + 1}</div>
            <div>{el.name}</div>
            <div>{el.age}</div>
            <div>{el.gender}</div>
            {props.isEdit ? (
              <button onClick={props.onClickUpdate(el.id)}>Edit</button>
            ) : (
              <button onClick={props.onClickEdit}>Update</button>
            )}
            <button onClick={props.onClickDelete(el.id)}>Delete</button>
          </S.InnerWrapper>
        ))}
      </S.ListWrapper>
    </S.Wrapper>
  );
}
