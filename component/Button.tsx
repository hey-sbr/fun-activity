export default function Button({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      className="bg-[#bf2734] text-white py-4 px-10 rounded-2xl shadow-md hover:bg-[#9c1e2a] transition-colors duration-300 cursor-pointer"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
