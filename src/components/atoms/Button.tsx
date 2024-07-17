// import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  scheme?: 'primary' | 'secondary' | 'accent' | "neutral" | "ghost" | "link" ;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button', scheme="primary" }) => {
  return (
    <button  type={type} onClick={onClick} className={"btn btn-"+scheme}>
        {label}
    </button>
  );
};

export default Button;
