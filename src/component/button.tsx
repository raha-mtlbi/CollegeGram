export default function Button({
  title,
  type,
  width,
  onClick,
  onSubmit,
}: {
  title: string;
  width: number | string;
  type?: string;
  onClick?: () => void;
  onSubmit?: () => void;
}) {
  return (
    <button
      className="text-white bg-[#C19008] rounded-3xl px-3 py-2 items-center text-centesr  text-[14px]"
      style={{ width: width }}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
