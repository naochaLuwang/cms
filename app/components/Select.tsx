"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface SelectProps {
  id: string;

  title?: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  required?: boolean;
  menus: any;
}

const Select: React.FC<SelectProps> = ({
  id,

  register,
  required,
  errors,
  menus,
}) => {
  return (
    <div className="w-full h-20">
      <select {...register(id, { required })}>
        <option value="">-- Select a menu --</option>
        {menus.map((menu: any) => (
          <option key={menu.title} value={menu.id}>
            {menu.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
