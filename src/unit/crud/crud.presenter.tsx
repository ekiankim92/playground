import * as S from "./crud.styles";
import { v4 as uuidv4 } from "uuid";

export default function CrudUI(props) {
  console.log(props.name);
  console.log(props.age);
  console.log(props.isEdit);
  console.log(props.nameRef);

  return (
    <S.Wrapper>
      <S.Title>CRUD Practice</S.Title>
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
        {props.isEdit ? (
          <button onClick={props.onClickEdit}>Edit</button>
        ) : (
          <button onClick={props.onClickSubmit}>Submit</button>
        )}
      </S.FormWrapper>
      <S.ListWrapper>
        {props.list.map((el: any, index: number) => (
          <S.InnerWrapper key={uuidv4()}>
            <div>{index + 1}</div>
            <div>{el.name}</div>
            <div>{el.age}</div>
            <div>{el.gender}</div>
            <button onClick={props.onClickUpdate}>Update</button>
            <button onClick={props.onClickEdit(el.id)}>Edit</button>
            <button onClick={props.onClickDelete(el.id)}>Delete</button>
          </S.InnerWrapper>
        ))}
      </S.ListWrapper>
    </S.Wrapper>
  );
}
