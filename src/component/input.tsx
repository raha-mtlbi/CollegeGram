//classname type ???
import Form_Error from "../assets/icons/Form_Error.svg";

interface IInput {
  placeholder: string;
  imageSrc: string;
  imageAlt: string;
  value?: string;
  onChange?: any;
  type?: string;
  error?: boolean;
  errorText?: string;
}

export default function Input({
  placeholder,
  imageSrc,
  imageAlt,
  value,
  onChange,
  type,
  error,
  errorText,
}: IInput) {
  return (
    <div className={"flex "}>
      <img src={imageSrc} alt={imageAlt} className="absolute mt-3 mr-2 " />

      <input
        className={
          error
            ? "shadow appearance-none border border-red-600 w-[380px] rounded-3xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-8 "
            : "shadow appearance-none border w-[380px] rounded-3xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-8 "
        }
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />

      {errorText && (
        <div className="flex items-center">
          <img alt="error" src={Form_Error} />
          <p className="color-red">{errorText}</p>
        </div>
      )}
    </div>
  );
}
