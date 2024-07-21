import { Color } from "@/models/enum/Color";
import { InputStyle, InputType } from "@/models/enum/Input";
import { Size } from "@/models/enum/Size";
import classNames from "classnames";

import React, { useState } from 'react';


// Jika Label diisi maka, akan dibuatkan label

interface InputComponentProps {
  className : string;
  value : string;
  placeHolder? : string;
  onChange?: (value:string) => void;
  type:InputType;
  

}

const InputComponent: React.FC<InputComponentProps> = ({ 
  className,
  value: initialValue = '',
  placeHolder,
  onChange, 
  type 
}) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };
  return (
    <input
          className={className}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeHolder}
        />
  );
}



interface TextInputProps {
  value?: string;
  onChange?: (value:string) => void;
  placeholder?: string;
  type?: InputType;
  style?: InputStyle;
  color?: Color;
  isDisabled?: boolean;
  placeHolder?:string;
  size?: Size;
  label?:string;
  
}

const Input: React.FC<TextInputProps> = ({ 
  label = "",
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
  
  if(label === ""){
    return (
      <InputComponent
        className={textInputClass}
        type={type}
        value={value}
        onChange={onChange}
        placeHolder={placeholder}
      />
    );
  }

  else{
    return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <InputComponent
        className={textInputClass}
        type={type}
        value={value}
        onChange={onChange}
        placeHolder={placeholder}
      />
    </label>
    );
  }

  
};



export default Input;
