import * as yup from "yup";

export const schema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "Enter more than 2 words")
    .required("Enter your first name"),
  lastName: yup
    .string()
    .min(2, "Enter more than 2 words")
    .required("Enter your first name"),
  email: yup.string().email().required("Please correctly enter your email"),
  password: yup
    .string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,20})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
