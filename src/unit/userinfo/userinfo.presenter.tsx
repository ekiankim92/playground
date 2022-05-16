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
          {/* ///////////////////////////////////////////////// */}
          {/* Drop Down Options */}
          {/* <select name="areacode">
            <option value="South Korea (+82)">South Korea {"82"}</option>
            <option value="United State (+1)">United State {"+1"}</option>
            <option value="Spain (+22)">Spain {"+22"}</option>
            <option value="Sudan (+249)">Sudan {"+249"}</option>
          </select> */}
          {/* <input list="phone" />
          <datalist id="phone">
            <option value="South Korea (+82)" />
            <option value="United State (+1)" />
            <option value="Spain (+22)" />
            <option value="Sudan (+249)" />
          </datalist> */}
          {/* ///////////////////////////////////////////////// */}
          <S.PhoneNumberInput
            type="text"
            placeholder="Mobile#"
            onChange={props.onChangeNumber}
            pattern="[0-9]+"
          />
          <S.VerifyButton type="submit" value="Verify" />
        </S.MobileWrapper>
        <S.VerificationWrapper>
          <S.VerificationLabel>
            Verification Code<S.Asterix>*</S.Asterix>
          </S.VerificationLabel>
          <S.CodeWrapper>
            <S.CodeInput
              type="text"
              placeholder="Please enter the verification num"
            />
            <S.TextCode>Click if you didn&apos;t receive the text?</S.TextCode>
          </S.CodeWrapper>
          <S.RvdCodeInput />
        </S.VerificationWrapper>
        <S.ActualUserWrapper>
          <S.ActualUserLabel>
            Actual User<S.Asterix>*</S.Asterix>
            <S.ActualUserInput
              type="text"
              placeholder="Please enter your name."
            />
          </S.ActualUserLabel>
        </S.ActualUserWrapper>
        <S.CheckBoxWrapper>
          <S.CheckBox type="checkbox" />
          <div>Same as the booker</div>
        </S.CheckBoxWrapper>
        <S.ParagraphWrapper>
          <S.FirstParagraph>
            Please enter the name of the customer who will be using BUXI for car
            rental insurance!
          </S.FirstParagraph>
          <S.SecondParagraph>
            Your name must be the same as the name on your ID (such as your
            national ID card or passport), or you can not get insurance
            coverage.
          </S.SecondParagraph>
        </S.ParagraphWrapper>
      </S.UserWrapper>
    </S.Wrapper>
  );
};
export default UserInfoUI;
