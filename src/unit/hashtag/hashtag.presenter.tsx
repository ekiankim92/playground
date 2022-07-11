import * as S from "./hashtag.styles";

export default function HashTagUI(props) {
  return (
    <S.Container>
      <S.Title>Hashtags</S.Title>
      <label>Hashtags</label>
      <input />
      <button onClick={props.onClickAdd}>Add</button>
      <div>
        <span>{props.hashtags}</span>
      </div>
    </S.Container>
  );
}
