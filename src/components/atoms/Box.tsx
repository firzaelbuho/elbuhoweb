
import React from 'react';
import classNames from 'classnames';
import { Color } from '@/models/Color';
import { ContentAlignment } from '@/models/Alignment';
import { Dimension } from '@/models/Layout';
import { BorderRadius, BorderStyle } from '@/models/Border';
import { Shadow } from '@/models/Shadow';
import { Padding, Margin } from '@/models/class/Layout';


interface BoxProps {
    children: React.ReactNode;
    background?:Color;
    padding?:Padding;
    margin?:Margin;
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
    margin = new Margin({all:0}), 
    padding = new Margin({all:0}),
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
