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
  errorText?: string;
  width?: number | string;
  getFieldprops?: any;
  ref?: any;
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
  ref,
}: IInput) {
  return (
    <div>
      <div className={"flex "}>
        {postfix}

        <input
          className={
            error
              ? "shadow appearance-none border border-red-600 w-80 rounded-3xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-8 "
              : " shadow appearance-none border w-80 rounded-3xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-8 "
          }
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          style={{ width: width }}
          {...getFieldprops}
          ref={ref}
        />
        {/* <div className=" -mr-8">{prefix}</div> */}
      </div>
      {error && errorText && (
        <div className="flex items-center my-3">
          <img alt="error" src={Form_Error} />
          <p className=" text-red-600 mx-2">{errorText}</p>
        </div>
      )}
    </div>
  );
}
