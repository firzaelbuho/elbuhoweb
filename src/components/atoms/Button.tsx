// import React from 'react';
import { ButtonShape, ButtonStyle, ButtonType } from "@/models/Button";
import { Color } from "@/models/Color";
import { Size } from "@/models/Size";
import classNames from "classnames";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: ButtonType;
  color?: Color  ;
  style?: ButtonStyle
  isDisabled?:boolean;
  isActive?:boolean;
  size?: Size ;
  shape?:ButtonShape;

}



const Button: React.FC<ButtonProps> = ({ 
  label, onClick, 
  type = ButtonType.BUTTON, 
  color= Color.INHERIT , 
  size= Size.MD, 
  shape=ButtonShape.NONE, 
  style=ButtonStyle.NONE,
  isDisabled=false, isActive=false
}) => {


  const buttonClass = classNames(
    "btn", `btn-${color}`,
    { 'btn-disabled': isDisabled },
    { 'btn-active': isActive },
    { [`btn-${shape}`]: shape !== 'none' },
    { [`btn-${size}`]: size !== 'responsive' },
    size === "responsive" && ["btn-xs", "sm:btn-sm", "md:btn-md", "lg:btn-lg"], // Menambahkan kelas 'btn-disabled' dan 'mybtn' jika isDisabled bernilai true
    { 'glass': style === "glass" },
    { [`btn-${style}`]: style !== 'none' }  // Kurung siku digunakan untuk properti dinamis
  )

  return (
    <button  type={type} onClick={onClick} className={buttonClass}>
        {label}
    </button>
  );
};

export default Button;
