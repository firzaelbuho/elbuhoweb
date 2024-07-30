
import React from 'react';
import classNames from 'classnames';
import { Color } from '@/models/enum/Color';
import { ContentAlignment, SelfAlignment } from '@/models/enum/Alignment';
import { Dimension, Overflow, Position } from '@/models/enum/Layout';
import { BorderRadius, BorderStyle } from '@/models/enum/Border';
import { Shadow } from '@/models/enum/Shadow';
import { Padding, Margin } from '@/models/class/Layout';


interface BoxProps {
    children?: React.ReactNode;
    backgroundColor?:Color;
    padding?:Padding;
    margin?:Margin;
    selfAlignment? : SelfAlignment;
    width? : Dimension;
    height?: Dimension;
    shadow? : Shadow;
    borderRadius?: BorderRadius;
    borderSize?:number
    borderColor?: Color;
    borderStyle?: BorderStyle;
    isContainer?: boolean;
    textColor?: Color;
    overflow?: Overflow;
    verticalAlignment? : ContentAlignment;
    position? : Position
}

const Container: React.FC<BoxProps> = ({ 
  position = Position.STATIC,
    children,
    textColor,
    overflow = Overflow.AUTO,
    margin = new Margin({all:undefined}), 
    padding = new Padding({all:undefined}),
    backgroundColor = Color.INHERIT,
    height = Dimension.FULL,
    width = Dimension.FULL,
    shadow = Shadow.NONE,
    selfAlignment = SelfAlignment.CENTER,
    borderRadius = BorderRadius.NONE,
    borderStyle = BorderStyle.NONE,
    borderColor = Color.INHERIT,
    borderSize = 4,
    isContainer = false,
    verticalAlignment = ContentAlignment.START
  
 }) => {
  const boxClass = classNames(
    `bg-${backgroundColor}`,
    `text-${textColor}`,
    `overflow-${overflow}`,
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
    },
    {
      'mx-auto': selfAlignment === SelfAlignment.CENTER,
      "ml-auto": selfAlignment === SelfAlignment.RIGHT,
      "mr-auto": selfAlignment === SelfAlignment.LEFT,
      
    },
    {
      'absolute': position === Position.ABSOLUTE,
      "static": position === Position.STATIC,
      'sticky': position === Position.STICKY,
      "relative": position === Position.RELATIVE,
      'fixed': position === Position.FIXED
      
      
    },
    {
        'container': isContainer === true,
       
        
    },
    `content-${verticalAlignment}`
  );

  return (
    <div className={boxClass}>
      {children}
    </div>
  );
};

export default Container;
