import Form_Error from "../assets/icons/Form_Error.svg";

interface IInput {
  placeholder: string;
  postfix?: React.ReactNode;
  prefix?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  value?: string;
  onChange?: any;
  type?: string;
  error?: boolean;
  errorText?: any;
  width?: number | string;
  getFieldprops?: any;
  onBlur?: any;
  onClick?: any;
}

export default function Input({
  postfix,
  prefix,
  placeholder,
  imageSrc,
  imageAlt,
  value,
  onChange,
  type,
  error,
  errorText,
  width,
  getFieldprops,
  onBlur,
  onClick,
}: IInput) {
  return (
    <div>
      <div className={"flex "}>
        {postfix}

        <input
          className={
            error
              ? "shadow appearance-none border border-red-600 w-full rounded-3xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-8 "
              : " shadow appearance-none border w-full rounded-3xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-8 "
          }
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onClick={onClick}
          style={{ width: width }}
          {...getFieldprops}
        />
        <div className="flex-end -mr-9">{prefix}</div>
      </div>
      {error && (
        <div className="flex items-center my-3">
          <img alt="error" src={Form_Error} className="w-3 h-3" />
          <p className=" text-red-600 mx-2 text-[12px]">{errorText}</p>
        </div>
      )}
    </div>
  );
}
