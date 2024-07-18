import classNames from "classnames";

import React from 'react';



interface TextInputProps {
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: "text" | "number";
  style?: "none" | "border" | "ghost";
  color?: 'none' | 'primary' | 'secondary' | 'accent' | 'warning' | 'info' | 'success' | "error";
  isDisabled?: boolean;
  placeHolder?:string;
  size?: "xs"|"sm" | "md" | "lg";
  
}

const TextInput: React.FC<TextInputProps> = ({ 
  value="", onChange, 
  placeholder, 
  type = 'text', 
  style="none" ,
  color="none",
  isDisabled = false,
  placeHolder,
  size="md"
}) => {
  


  const textInputClass = classNames(
    "input" ," w-full", "max-w-xs",
    
    `input-${color}`,
    `input-${size}`,
    {"input-disabled":isDisabled},
    {"input-ghost" : style==="ghost"},
    {"input-bordered" : style==="border"}

  )
  
  return (
    <input
      className={textInputClass}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};



export default TextInput;
