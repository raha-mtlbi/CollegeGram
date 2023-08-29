export default function Button({
  title,
  width,
  onClick,
  onSubmit,
  type,
}: {
  title: string;
  width: number | string;
  onClick?: () => void;
  onSubmit?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}) {
  return (
    <button
      className="text-white bg-[#C19008] rounded-3xl px-3 py-2 items-center text-centesr  text-[14px]"
      style={{ width: width }}
      onClick={onClick}
      type={type}
    >
      {title}
    </button>
  );
}
