import * as S from "./form.styles";
import { FormProps } from "./form.types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./form.validations";

export default function FormUI({ onChangeInputs, onClickSubmit }: FormProps) {
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      <S.Wrapper>
        <h2>Register Page</h2>
        <S.NameLabelWrapper>
          <S.FirstNameLabel>First name (Gildong)</S.FirstNameLabel>
          <S.LastNameLabel>Last name (Hong)</S.LastNameLabel>
        </S.NameLabelWrapper>
        <S.NameWrapper>
          <S.FirstNameInput
            name="firstName"
            onChange={onChangeInputs}
            {...register("firstName")}
          />
          <div>{formState.errors.firstName?.message}</div>
          <S.LastNameInput
            name="lastName"
            onChange={onChangeInputs}
            {...register("lastName")}
          />
          <div>{formState.errors.lastName?.message}</div>
        </S.NameWrapper>
        <S.EmailWrapper>
          <S.EmailLabel>Email</S.EmailLabel>
          <S.EmailInput
            type="email"
            name="email"
            onChange={onChangeInputs}
            {...register("email")}
          />
          <div>{formState.errors.email?.message}</div>
        </S.EmailWrapper>
        <S.PasswordWrapper>
          <S.PasswordLabel>Password</S.PasswordLabel>
          <S.PasswordInput
            name="password"
            onChange={onChangeInputs}
            {...register("password")}
          />
          <div>{formState.errors.password?.message}</div>
        </S.PasswordWrapper>
        <S.PassConfirmWrapper>
          <S.ConfirmPassLabel>Confirm password</S.ConfirmPassLabel>
          <S.ConfirmPassInput
            name="passwordConfirm"
            onChange={onChangeInputs}
            {...register("passwordConfirm")}
          />
          <div>{formState.errors.passwordConfirm?.message}</div>
        </S.PassConfirmWrapper>
        <S.ButtonWrapper>
          <S.Button>Register</S.Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </form>
  );
}
