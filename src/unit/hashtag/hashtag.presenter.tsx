import * as S from "./hashtag.styles";

export default function HashTagUI(props) {
  console.log("props.hastags:", props.hashtags);

  return (
    <S.Container>
      <S.Title>Hashtags</S.Title>
      <label>Hashtags</label>
      <S.HashInput
        placeholder="add hashtags"
        onChange={props.onChangeHashtags}
        onKeyDown={props.onKeyPress}
      />
      <S.AddButton onClick={props.onClickAdd}>Add</S.AddButton>
      <S.HashtagsWrapper>
        {props.hashtags.map((el, index) => (
          <div key={index}>
            <S.Hashtags onClick={props.onClickDeleteHashtags(index)}>
              {el}
            </S.Hashtags>
          </div>
        ))}
      </S.HashtagsWrapper>
      <hr />
      <hr />
      <hr />
      <hr />
      <input onChange={props.onChangeWords} />
      <button onClick={props.onClickAddList}>Click</button>
      {props.list.map((el, index) => (
        <div key={index}>
          <div>{el}</div>
        </div>
      ))}
    </S.Container>
  );
}
