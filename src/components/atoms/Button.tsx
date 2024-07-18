// import React from 'react';
import classNames from "classnames";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  color?: 'none'|'primary' | 'secondary' | 'accent' | "neutral" | "info" | "warning" | "success" | "error"  ;
  style?: "none" | "ghost" | "link" | "glass" | "outline"
  isDisabled?:boolean;
  isActive?:boolean;
  size?: "xs"|"sm" | "md" | "lg" | "responsive";
  shape?:"none"|"square" | "circle" | "wide" | "block"

}



const Button: React.FC<ButtonProps> = ({ 
  label, onClick, type = 'button', color="none" , size="md", shape="none", style="none",
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
