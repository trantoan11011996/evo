import React from "react";
import "./Input.style.css";
interface Props {
  t: any;
  placeholder: string;
  name: string;
  register: any;
}
export const Input = ({ t, placeholder, name, register }: Props) => {
  return (
    <input
      className="input mb-2"
      type={name}
      placeholder={placeholder}
      {...register}
    ></input>
  );
};
