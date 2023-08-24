export default function Button({
  title,
  width,
}: {
  title: string;
  width: number | string;
}) {
  return (
    <button
      className="text-white bg-yellow-600 rounded-3xl px-3 pt-1 pb-2 items-center text-centesr"
      style={{ width: width, height: "36px" }}
    >
      {title}
    </button>
  );
}
