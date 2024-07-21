
import React from 'react';
import classNames from 'classnames';
import { Color } from '@/models/enum/Color';
import { ContentAlignment, SelfAlignment } from '@/models/enum/Alignment';
import { Dimension } from '@/models/enum/Layout';
import { BorderRadius, BorderStyle } from '@/models/enum/Border';
import { Shadow } from '@/models/enum/Shadow';
import { Padding, Margin } from '@/models/class/Layout';


interface BoxProps {
    textColor?: Color;
    children?: React.ReactNode;
    background?:Color;
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
}

const Box: React.FC<BoxProps> = ({ 
    children,
    textColor,
    margin = new Margin({all:undefined}), 
    padding = new Margin({all:undefined}),
    background = Color.INHERIT,
    height = Dimension.FULL,
    width = Dimension.FULL,
    shadow = Shadow.NONE,
    selfAlignment = SelfAlignment.CENTER,
    borderRadius = BorderRadius.NONE,
    borderStyle = BorderStyle.NONE,
    borderColor = Color.INHERIT,
    borderSize = 4
  
 }) => {
  const boxClass = classNames(
    `bg-${background}`,
    `text-${textColor}`,
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
      
  }
  );

  return (
    <div className={boxClass}>
      {children}
    </div>
  );
};

export default Box;
