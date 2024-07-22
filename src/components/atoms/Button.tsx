// import React from 'react';



import { ButtonShape, ButtonStyle, ButtonType } from "@/models/enum/Button";
import { Color } from "@/models/enum/Color";
import { Size } from "@/models/enum/Size";
import classNames from "classnames";

interface ButtonProps {
  label?: string;
  onClick?: () => void;
  type?: ButtonType;
  btnColor?: Color  ;
  style?: ButtonStyle
  isDisabled?:boolean;
  isActive?:boolean;
  size?: Size ;
  shape?:ButtonShape;

}



const Button: React.FC<ButtonProps> = ({ 
  label = "Button", 
  onClick, 
  type = ButtonType.BUTTON, 
  btnColor= Color.INHERIT , 
  size= Size.MD, 
  shape=ButtonShape.NONE, 
  style=ButtonStyle.NONE,
  isDisabled=false, isActive=false
}) => {


  const buttonClass = classNames(
    "btn", `btn-${btnColor}`,
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
