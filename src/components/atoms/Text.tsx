import React from 'react';
import classNames from 'classnames';
import { Size } from '@/models/Size';
import { Color } from '@/models/Color';
import { TextAlignment } from '@/models/Alignment';

// Alignment hanya berfungsi jika isBlocked = true 

interface TextProps {
  children: React.ReactNode;
  alignment?: TextAlignment;
  color?: Color;
  size?: Size;
  isBlock?:boolean;
}
const Text: React.FC<TextProps> = ({ 
  isBlock=false, 
  children, 
  alignment = TextAlignment.LEFT, 
  color=Color.INHERIT, 
  size=Size.BASE 
}) => {
  const textClass = classNames(
   
    `text-${alignment}`, 
    `text-${color}`,
    {[`text-${size}`]: size},
  );

  if(isBlock){
    return <div className={textClass}>{children}</div>;
  } else {
    return <span className={textClass}>{children}</span>;
  }

  
};

export default Text;
