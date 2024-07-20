
import React from 'react';
import classNames from 'classnames';
import { Color } from '@/models/Color';
import { ContentAlignment } from '@/models/Alignment';
import { Dimension } from '@/models/Layout';
import { BorderRadius, BorderStyle } from '@/models/Border';
import { Shadow } from '@/models/Shadow';

interface BoxProps {
    children: React.ReactNode;
    background?:Color;
    padding?:number;
    margin?:number;
    alignment? : ContentAlignment;
    width? : Dimension;
    height?: Dimension;
    shadow? : Shadow;
    borderRadius?: BorderRadius;
    borderSize?:number
    borderColor?: Color;
    borderStyle?: BorderStyle;
}

const Box: React.FC<BoxProps> = ({ 
    children,
    margin, padding,
    background = Color.INHERIT,
    height = Dimension.FULL,
    width = Dimension.FULL,
    shadow = Shadow.NONE,

    borderRadius = BorderRadius.NONE,
    borderStyle = BorderStyle.NONE,
    borderColor = Color.INHERIT,
    borderSize = 4
  
 }) => {
  const boxClass = classNames(
    `bg-${background}`,
    `m-${margin}`,
    `p-${padding}`,
    `h-${height}`,
    `w-${width}`,

    `${shadow}`,
   

    `border-${borderColor}`,
    `border-${borderSize}`,
    `rounded-${borderRadius}`,


    {
        'border-none': borderStyle === BorderStyle.NONE,
        'border-solid': borderStyle === BorderStyle.SOLID,
        'border-dashed': borderStyle === BorderStyle.DASHED,
        'border-dotted': borderStyle === BorderStyle.DOTTED,
      }
  );

  return (
    <div className={boxClass}>
      {children}
    </div>
  );
};

export default Box;
