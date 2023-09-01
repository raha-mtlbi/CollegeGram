import * as Yup from "yup";

export const loginValidation = Yup.object().shape({
  usernameOrEmail: Yup.string().required("Please enter your email"),
  password: Yup.string()
    .trim()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      "رمز عبور شما مناسب نیست"
    ),
});

export const AddPostValidation = Yup.object().shape({
  description: Yup.string().required("Please enter your email"),
  tag: Yup.string(),
});

export const sendEmailValidation = Yup.object().shape({
  usernameOrEmail: Yup.string().required("Please enter your email"),
});
