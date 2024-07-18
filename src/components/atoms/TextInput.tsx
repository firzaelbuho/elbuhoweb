import { Color } from "@/models/Color";
import { InputStyle, InputType } from "@/models/Input";
import { Size } from "@/models/Size";
import classNames from "classnames";

import React from 'react';




interface TextInputProps {
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: InputType;
  style?: InputStyle;
  color?: Color;
  isDisabled?: boolean;
  placeHolder?:string;
  size?: Size;
  
}

const TextInput: React.FC<TextInputProps> = ({ 
  value="", 
  onChange, 
  placeholder, 
  type = InputType.TEXT, 
  style=InputStyle.NONE ,
  color=Color.INHERIT,
  isDisabled = false,
  placeHolder,
  size=Size.MD
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
