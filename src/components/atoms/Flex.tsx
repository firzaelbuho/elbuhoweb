
import React from 'react';
import classNames from 'classnames';
import { Color } from '@/models/enum/Color';
import { Dimension, Direction, Overflow } from '@/models/enum/Layout';
import { FlexWrap } from '@/models/enum/Flex';
import { ContentAlignment, VerticalAlignment } from '@/models/enum/Alignment';
import { Margin, Padding } from '@/models/class/Layout';

interface FlexProps {
    children?: React.ReactNode;
    backgroundColor?:Color;
    padding?:Padding;
    margin?:Margin;
    horizontalAlignment? : ContentAlignment;
    verticalAlignment? : VerticalAlignment;
    width? : Dimension;
    height?: Dimension;
    direction:Direction;
    wrap?:FlexWrap;
    overflow?: Overflow;
    gap? : number;
}

const Flex: React.FC<FlexProps> = ({
    children,
    margin = new Margin({all:undefined}), 
    padding = new Padding({all:undefined}),
    backgroundColor = Color.INHERIT,
    height = Dimension.FULL,
    width = Dimension.FULL,
    wrap = FlexWrap.WRAP,
    overflow = Overflow.AUTO,
    gap = 0,
    direction,
    horizontalAlignment = ContentAlignment.START,
    verticalAlignment = VerticalAlignment.MIDDLE
  }) => {
  
  if(wrap != FlexWrap.NO_WRAP){
    overflow = Overflow.VISIBLE;
  }
    
  const flexrowClass = classNames(
    // "overflow-scroll",
    "flex", 
    // "items-center",
    // "justify-center",

    `justify-${horizontalAlignment}`,
    {"items-center" : verticalAlignment===VerticalAlignment.MIDDLE},

    `flex-${direction}`,
    `bg-${backgroundColor}`,

     // Margin
     `mt-${margin.top}`,
     `mb-${margin.bottom}`,
     `ml-${margin.left}`,
     `mr-${margin.right}`,
 
     // Padding
     `pt-${padding.top}`,
     `pb-${padding.bottom}`,
     `pl-${padding.left}`,
     `pr-${padding.right}`,

    `h-${height}`,
    `w-${width}`,
    `gap-${gap}`,
    `flex-${wrap}`,
    `overflow-${overflow}`,
  );

  return (
    <div className={flexrowClass}>
      {children}
    </div>
  );
};

export default Flex;
