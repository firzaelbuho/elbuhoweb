import React from 'react';
import classNames from 'classnames';
import { Size } from '@/models/Size';
import { Color } from '@/models/Color';
import { TextAlignment } from '@/models/Alignment';
import { Dimension } from '@/models/Layout';

// Alignment hanya berfungsi jika isBlocked = true 

interface TextProps {
  children: React.ReactNode;
  textAlignment?: TextAlignment;
  color?: Color;
  size?: Size;
  isBlock?:boolean;
  margin?:Dimension;
  padding?:Dimension;
}
const Text: React.FC<TextProps> = ({ 
  isBlock=false, 
  children, 
  textAlignment = TextAlignment.LEFT, 
  color=Color.INHERIT, 
  size=Size.BASE ,
  margin, padding
}) => {
  const textClass = classNames(
   
    `text-${textAlignment}`, 
    `m-${margin}`,
    `p-${padding}`,
    // "text-center",
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
