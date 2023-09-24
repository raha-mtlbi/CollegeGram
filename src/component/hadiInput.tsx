import React from "react";
import { useField } from "formik";
import Input from "./input";

interface IInput {
  placeholder: string;
  name: string;
  prefix?: React.ReactNode;
  type?: React.HTMLInputTypeAttribute;
}

export default function CustomInput({ prefix, placeholder, type, name }: IInput) {
  const [{ value, onChange }, { error, touched }, { setValue }] =
    useField(name);

  return (
    <Input
      placeholder={placeholder}
      postfix={prefix}
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
      error={touched && Boolean(error)}
      errorText={error}
      type={type}
    />
  );
}
