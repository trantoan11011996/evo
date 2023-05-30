import React from "react";
import "./TextArena.style.css";
interface Props {
  placeholder: string;
  register: any;
  name: string;
  type: string;
}
export const TextArena = ({ placeholder, register, name, type }: Props) => {
  return (
    <textarea
      className="text-arena"
      cols="30"
      rows="3"
      placeholder={placeholder}
      name={name}
      type={type}
      {...register}
    ></textarea>
  );
};
