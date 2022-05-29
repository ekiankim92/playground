import * as S from "./refactoring.styles";
import { useForm } from "react-hook-form";
import { PropsRefactoring } from "./refactoring.types";

export default function RefactoringUI(props: PropsRefactoring) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  return (
    <S.Wrapper>
      <input placeholder="this is focus test" ref={props.onFocus} />
      <form onSubmit={handleSubmit(props.onClickSubmit)}>
        <S.Title>Register</S.Title>
        <S.MainWrapper>
          <S.EmailWrapper>
            <label>Email</label>
            <input
              type="text"
              name="email"
              onChange={props.onChangeInputs}
              {...register("email")}
            />
            <div>{errors.message}</div>
          </S.EmailWrapper>
          <S.NameWrapper>
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={props.onChangeInputs}
              {...register("name")}
            />
            <div>{errors.message}</div>
          </S.NameWrapper>
          <S.PasswordWrapper>
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={props.onChangeInputs}
              {...register("password")}
            />
            <div>{errors.message}</div>
          </S.PasswordWrapper>
          <S.ConfirmPasswordWrapper>
            <label>Confirm Password</label>
            <input
              type="password"
              name="password"
              onChange={props.onChangePasswordConfirm}
            />
          </S.ConfirmPasswordWrapper>
          <button onClick={props.onClickSubmit}>Submit</button>
        </S.MainWrapper>
      </form>
    </S.Wrapper>
  );
}
