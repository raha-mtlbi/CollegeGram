import * as Yup from "yup";

const psswordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
const usernameOremailRegEx =
  // /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ||
  /^[a-zA-Z][a-zA-Z0-9_]{5,63}$/;

export const loginValidation = Yup.object().shape({
  // usernameOrEmail: Yup.string()
  //   .required("tets")
  //   .trim()
  //   .matches(usernameOremailRegEx, ""),
  password: Yup.string()
    .required("حداقل 6 کاراکتر، شامل حروف کوچک، بزرگ و اعداد باشد")
    .trim()
    .matches(psswordRegEx, "رمز عبور صحیح نیست"),
});

export const registerSchema = Yup.object().shape({
  email: Yup.string()
    .required("لطفا ایمیل معتبری وارد کنید")
    .email("لطفا ایمیل معتبری وارد کنید"),
  username: Yup.string()
    .required("نام کاربری باید بیشتر از 6 کارکتر باشد")
    .matches(usernameOremailRegEx, "نام کاربری باید بیشتر از 6 کارکتر باشد"),

  password: Yup.string()
    .trim()
    .matches(psswordRegEx, "حداقل 6 کاراکتر، شامل حروف کوچک، بزرگ و اعداد باشد")
    .required("حداقل 6 کاراکتر، شامل حروف کوچک، بزرگ و اعداد باشد."),
  repassword: Yup.string()
    .oneOf([Yup.ref("password")], "رمز عبور شما منطبق نیست")
    .required("لطفا رمز عبور خود را تایید کنید"),
});

export const AddPostValidation = Yup.object().shape({
  caption: Yup.string().required("وارد کردن توضیحات الزامی است."),
  tag: Yup.string(),
});

export const sendEmailValidation = Yup.object().shape({
  usernameOrEmail: Yup.string()
    .required("لطفا ایمیل خود را وارد کنید.")
    .email("لطفا ایمیل معتبری وارد کنید"),
});

export const setPasswordValidation = Yup.object().shape({
  newPassword: Yup.string()
    .trim()
    .matches(psswordRegEx, "حداقل 6 کاراکتر، شامل حروف کوچک، بزرگ و اعداد باشد")
    .required("حداقل 6 کاراکتر، شامل حروف کوچک، بزرگ و اعداد باشد."),
  repassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "رمز عبور شما منطبق نیست")
    .required("لطفا رمز عبور خود را تایید کنید"),
});
