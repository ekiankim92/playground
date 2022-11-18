import * as S from "./form.styles";
import { FormProps } from "./form.types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./form.validations";
import { strings } from "../../resources";

export default function FormUI({ onChangeInputs, onClickSubmit }: FormProps) {
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      <S.Wrapper>
        <h2>Register Page</h2>
        <S.Button>Language</S.Button>
        <S.NameLabelWrapper>
          <S.FirstNameLabel>{strings.get("firstName")}</S.FirstNameLabel>
          <S.LastNameLabel>{strings.get("lastName")}</S.LastNameLabel>
        </S.NameLabelWrapper>
        <S.NameWrapper>
          <S.FirstNameInput
            name="firstName"
            onChange={onChangeInputs}
            {...register("firstName")}
          />
          <S.ErrorMessage>{formState.errors.firstName?.message}</S.ErrorMessage>
          <S.LastNameInput
            name="lastName"
            onChange={onChangeInputs}
            {...register("lastName")}
          />
          <S.ErrorMessage>{formState.errors.lastName?.message}</S.ErrorMessage>
        </S.NameWrapper>
        <S.EmailWrapper>
          <S.EmailLabel>{strings.get("email")}</S.EmailLabel>
          <S.EmailInput
            type="email"
            name="email"
            onChange={onChangeInputs}
            {...register("email")}
          />
          <S.ErrorMessage>{formState.errors.email?.message}</S.ErrorMessage>
        </S.EmailWrapper>
        <S.PasswordWrapper>
          <S.PasswordLabel>{strings.get("password")}</S.PasswordLabel>
          <S.PasswordInput
            name="password"
            onChange={onChangeInputs}
            {...register("password")}
          />
          <S.ErrorMessage>{formState.errors.password?.message}</S.ErrorMessage>
        </S.PasswordWrapper>
        <S.PassConfirmWrapper>
          <S.ConfirmPassLabel>
            {strings.get("passwordConfirm")}
          </S.ConfirmPassLabel>
          <S.ConfirmPassInput
            name="passwordConfirm"
            onChange={onChangeInputs}
            {...register("passwordConfirm")}
          />
          <S.ErrorMessage>
            {formState.errors.passwordConfirm?.message}
          </S.ErrorMessage>
        </S.PassConfirmWrapper>
        <S.ButtonWrapper>
          <S.Button>Register</S.Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </form>
  );
}
