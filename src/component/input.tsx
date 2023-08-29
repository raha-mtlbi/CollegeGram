//classname type ???

export default function Input({
  placeholder,
  imageSrc,
  imageAlt,
  className,
  value,
  onChange,
}: {
  placeholder: string;
  imageSrc: string;
  imageAlt: string;
  className?: any;
  value?: string;
  onChange?: any;
}) {
  return (
    <div className={"flex "}>
      <img src={imageSrc} alt={imageAlt} className="absolute mt-3 mr-2 " />

      <input
        className="shadow appearance-none border w-[380px] rounded-3xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-8 "
        placeholder={placeholder}
      />
    </div>
  );
}
