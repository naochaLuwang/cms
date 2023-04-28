"use client";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
  type,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-90 transition w-full ${
        outline ? "bg-white" : "bg-blue-800"
      } ${outline ? "border-black" : "border-blue-800"} ${
        outline ? "text-black" : "text-white"
      } ${small ? "py-1" : "py-3"} ${small ? "text-sm" : "text-md"} ${
        small ? "font-light" : "font-semibold"
      } ${small ? "border-[1px]" : "border-2"} `}
    >
      {Icon && <Icon className="absolute left-4 top-3" size={24} />}
      {label}
    </button>
  );
};

export default Button;
