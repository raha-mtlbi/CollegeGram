import * as Yup from "yup";

const psswordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
const usernameOremailRegEx = /~/;

export const loginValidation = Yup.object().shape({
  usernameOrEmail: Yup.string().required("لطفا ایمیل خود را وارد کنید."),
  password: Yup.string()
    .trim()
    .matches(psswordRegEx, "رمز عبور شما مناسب نیست"),
});

export const AddPostValidation = Yup.object().shape({
  description: Yup.string(),
  tag: Yup.string(),
});

export const sendEmailValidation = Yup.object().shape({
  usernameOrEmail:
    Yup.string().required("لطفا ایمیل خود را وارد کنید.").trim() ||
    // .matches(usernameOremailRegEx, "")
    Yup.string().required("لطفا ایمیل خود را وارد کنید.").email(),
});

export const setPasswordValidation = Yup.object().shape({
  password: Yup.string().trim().matches(psswordRegEx, ""),
});
