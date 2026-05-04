import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
};

export default function Button({
  label,
  className = "",
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={`
        bg-[#bf2734] text-white py-4 px-10 rounded-2xl shadow-md 
        transition-all duration-200

        hover:bg-[#9c1e2a]
        active:scale-95

        disabled:cursor-not-allowed 
        disabled:active:scale-100

        focus:outline-none 
        focus:ring-2 
        focus:ring-offset-2 
        focus:ring-[#bf2734]

        ${className}
      `}
      {...rest}
    >
      {label}
    </button>
  );
}