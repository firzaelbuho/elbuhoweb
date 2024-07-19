import { Color } from "@/models/Color";
import { InputStyle, InputType } from "@/models/Input";
import { Size } from "@/models/Size";
import classNames from "classnames";

import React from 'react';
import { useState } from "react";
// Jika Label diisi maka, akan dibuatkan label




interface TextAreaComponentProps {
    classes : string;
    value : string;
    placeHolder? : string;
    onChange?: (value:string) => void;
    
  
}

const TextAreaComponent: React.FC<TextAreaComponentProps> = ({
     classes,
     value:initialValue = "",
     placeHolder ,
     onChange
    }) => {
    const [value, setValue] = useState(initialValue);
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
      if (onChange) {
        onChange(newValue);
      }
    };

  return (
    <textarea
        className={classes}
        onChange={handleChange}
        rows={6}
        // onChange={onChange}
        placeholder={placeHolder}
      >
        {value}
      </textarea>
  );
};



interface TextInputProps {
    value?: string;
   
    placeholder?: string;
    
    style?: InputStyle;
    color?: Color;
    isDisabled?: boolean;
    placeHolder?:string;
    size?: Size;
    label?:string;
    onChange?: (value:string) => void;
    
}

const TextArea: React.FC<TextInputProps> = ({ 
  label = "",
  value="", 
  onChange, 
  placeholder, 
  
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
      <TextAreaComponent 
        classes={textInputClass} value = {value} placeHolder={placeHolder} onChange={onChange}
      />
    );
  }

  else{
    return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <TextAreaComponent 
        classes={textInputClass} value = {value} placeHolder={placeHolder} onChange={onChange}
      />
    </label>
    );
  }

  
};



export default TextArea;
