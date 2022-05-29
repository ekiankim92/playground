import * as S from "./refactoring.styles";

export default function RefactoringUI() {
  return (
    <S.Wrapper>
      <S.Title>Register</S.Title>
      <S.MainWrapper>
        <S.EmailWrapper>
          <label>Email</label>
          <input type="email" />
        </S.EmailWrapper>
        <S.NameWrapper>
          <label>Name</label>
          <input type="text" />
        </S.NameWrapper>
        <S.PasswordWrapper>
          <label>Password</label>
          <input type="password" />
        </S.PasswordWrapper>
        <S.ConfirmPasswordWrapper>
          <label>Confirm Password</label>
          <input type="password" />
        </S.ConfirmPasswordWrapper>
        <button>Submit</button>
      </S.MainWrapper>
    </S.Wrapper>
  );
}
