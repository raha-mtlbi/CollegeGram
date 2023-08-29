//classname type ???

export default function Input({
  placeholder,
  imageSrc,
  imageAlt,
  value,
  onChange,
  type,
}: {
  placeholder: string;
  imageSrc: string;
  imageAlt: string;
  value?: string;
  onChange?: any;
  type?: string;
}) {
  return (
    <div className={"flex "}>
      <img src={imageSrc} alt={imageAlt} className="absolute mt-3 mr-2 " />

      <input
        className="shadow appearance-none border w-[380px] rounded-3xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-8 "
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
