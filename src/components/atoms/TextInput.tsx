'use client'; // Memberi tahu Next.js bahwa ini adalah komponen klien

import React from 'react';

function getClassNameStyle(style: string): string {
  switch (style) {
      case "default":
          return "input w-full max-w-xs";
      case "border":
          return "input input-bordered w-full max-w-xs";
      case "ghost":
          return "input input-ghost w-full max-w-xs";
      default:
          return "input w-full max-w-xs";
  }
}

function getClassNameScheme(scheme: string): string {
  if(scheme==="none"){
    return "";
  } else {
    return " input-"+scheme
  }
}


interface TextInputProps {
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: "text" | "number";
  style?: "default" | "border" | "ghost" | 'disabled';
  scheme?: 'none' | 'primary' | 'secondary' | 'accent' | 'warning' | 'info' | 'success';
  
}

const TextInput: React.FC<TextInputProps> = ({ 
  value="", onChange, 
  placeholder, 
  type = 'text', 
  style="default" ,
  scheme="none"
}) => {
  
  const className = getClassNameStyle(style) +  getClassNameScheme(scheme)
  // alert(className)
  
  return (
    <input
      className={className}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled = {style === "disabled"}
    />
  );
};



export default TextInput;
