//classname type ???

export default function Input({
  placeholder,
  imageSrc,
  imageAlt,
  className,
}: {
  placeholder: string;
  imageSrc: string;
  imageAlt: string;
  className?: any;
}) {
  return (
    <div className={"flex "}>
      <img src={imageSrc} alt={imageAlt} className="absolute mt-3 mr-2 " />

      <input
        className="shadow appearance-none w-80 border rounded-3xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-8 "
        placeholder={placeholder}
      />
    </div>
  );
}
