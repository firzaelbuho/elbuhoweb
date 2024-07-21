import React from 'react';
import classNames from 'classnames';
import { Size } from '@/models/enum/Size';
import { Color } from '@/models/enum/Color';
import { TextAlignment } from '@/models/enum/Alignment';
import { Dimension } from '@/models/enum/Layout';
import { Margin, Padding } from '@/models/class/Layout';
import { TextLevel } from '@/models/enum/Typography';

// Alignment hanya berfungsi jika isBlocked = true 

interface TextProps {
  children: React.ReactNode;
  textAlignment?: TextAlignment;
  color?: Color;
  size?: Size;
  // isBlock?:boolean;
  margin?:Margin;
  padding?:Padding;
  textLevel?: TextLevel;
}
const Text: React.FC<TextProps> = ({ 
 
  children, 
  textAlignment = TextAlignment.LEFT, 
  color=Color.INHERIT, 
  size=Size.BASE ,
  textLevel = TextLevel.PHARAGRAPH,
  margin = new Margin({all:undefined}), 
  padding = new Margin({all:undefined}),
}) => {
  const textClass = classNames(
   
    `text-${textAlignment}`, 
    
    // Padding
    `mt-${margin.top}`,
    `mb-${margin.bottom}`,
    `ml-${margin.left}`,
    `mr-${margin.right}`,

    // Margin
    `pt-${padding.top}`,
    `pb-${padding.bottom}`,
    `pl-${padding.left}`,
    `pr-${padding.right}`,
    // "text-center",
    `text-${color}`,
    {[`text-${size}`]: textLevel === TextLevel.PHARAGRAPH},
    {[`text-${size}`]: textLevel === TextLevel.INLINE},

    // Only for heading
    {"text-5xl font-extrabold": textLevel === TextLevel.H1},
    {"text-4xl font-bold": textLevel === TextLevel.H2},
    {"text-3xl font-bold ": textLevel === TextLevel.H3},
    {"text-2xl font-bold": textLevel === TextLevel.H4},
    {"text-xl font-bold": textLevel === TextLevel.H5},
    {"text-lg font-bold": textLevel === TextLevel.H6},
  );

 

  if(textLevel != TextLevel.INLINE){
    return <div className={textClass}>{children}</div>;
  } else {
    return <span className={textClass}>{children}</span>;
  }

  
};

export default Text;
