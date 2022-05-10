import * as S from "./userinfo.styles";

const UserInfoUI = (props) => {
  return (
    <S.Wrapper>
      <S.Title>User Info</S.Title>
      <S.UserWrapper>
        <S.RequiredInfo>*Required Information</S.RequiredInfo>
        <S.NameWrapper>
          <S.Name>
            Name<S.Asterix>*</S.Asterix>
          </S.Name>
          <S.NameInput
            placeholder="Please enter your name."
            onChange={props.onChangeName}
            ref={props.inputRef}
          />
          {props.isNameCancel && (
            <S.CancelBtn type="reset" onClick={props.handleReset}>
              <S.CancelImg src="/cancel.png/" onClick={props.onClickClear} />
            </S.CancelBtn>
          )}
        </S.NameWrapper>
        <S.EmailWrapper>
          <S.Email>
            Email<S.Asterix>*</S.Asterix>
          </S.Email>
          <S.EmailInput
            type="email"
            placeholder="Please input email"
            onChange={props.onChangeEmail}
            ref={props.emailRef}
          />
          {props.isEmailCancel && (
            <S.CancelBtn type="reset" onClick={props.handleEmailReset}>
              <S.CancelImg
                src="/cancel.png/"
                onClick={props.onClickEmailClear}
              />
            </S.CancelBtn>
          )}
        </S.EmailWrapper>
        <label>
          Mobile#<S.Asterix>*</S.Asterix>
        </label>
        <label>
          Verification Code<S.Asterix>*</S.Asterix>
        </label>
        <label>
          Actual User<S.Asterix>*</S.Asterix>
        </label>
      </S.UserWrapper>
    </S.Wrapper>
  );
};
export default UserInfoUI;
