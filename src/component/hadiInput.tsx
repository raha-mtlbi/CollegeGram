import React from "react";
import Form_Error from "../assets/icons/Form_Error.svg";
import { useField } from "formik";
import Input from "./input";

interface IInput {
  placeholder: string;
  name: string;
  prefix?: React.ReactNode;
  type?: React.HTMLInputTypeAttribute;
}

export default function HadiInput({ prefix, placeholder, type, name }: IInput) {
  const [{ value, onChange }, { error, touched }, { setValue }] =
    useField(name);

  return (
    <Input
      placeholder="ایمیل"
      imageAlt=""
      imageSrc=""
      postfix={prefix}
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
      error={touched && Boolean(error)}
      errorText={error}
    />
  );
}
