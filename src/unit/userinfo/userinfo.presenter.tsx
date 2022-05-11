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
        <S.MobileWrapper>
          <S.MobileLabel>
            Mobile#<S.Asterix>*</S.Asterix>
          </S.MobileLabel>
          <S.AreaCodeInput value="+82" />
          <S.DownArrowImg src="/down.png/" />
          {/* <input list="phone" />
          <datalist id="phone">
            <option value="South Korea (+82)" />
            <option value="United State (+1)" />
            <option value="Spain (+22)" />
            <option value="Sudan (+249)" />
          </datalist> */}
          <S.PhoneNumberInput
            type="text"
            placeholder="Mobile#"
            onChange={props.onChangeNumber}
            pattern="[0-9]+"
          />
          <S.VerifyButton type="submit" value="Verify" />
        </S.MobileWrapper>
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
