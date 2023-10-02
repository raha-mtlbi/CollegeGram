import React from "react";

export default function Button({
  title,
  onClick,
  type,
  disabled,
}: {
  title: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}) {
  return (
    <button
      className={
        disabled
          ? "text-white bg-[#CDCDCD] rounded-3xl px-6 py-2 items-center text-centesr text-[14px]"
          : "text-white bg-[#C19008] rounded-3xl px-6 py-2 items-center text-centesr text-[14px]"
      }
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {title}
    </button>
  );
}
