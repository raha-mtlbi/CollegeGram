import React from "react";

export default function Button({
  title,
  width,
  onClick,
  type,
  disabled,
}: {
  title: string;
  width: number | string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}) {
  return (
    <button
      className={
        disabled
          ? "text-white bg-[#CDCDCD] rounded-3xl px-3 py-2 items-center text-centesr  text-[14px]"
          : "text-white bg-[#C19008] rounded-3xl px-3 py-2 items-center text-centesr  text-[14px]"
      }
      style={{ width: width }}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {title}
    </button>
  );
}
