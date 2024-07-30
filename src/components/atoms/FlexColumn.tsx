
import React from 'react';
import classNames from 'classnames';
import { Color } from '@/models/enum/Color';
import { Dimension, Direction, Overflow } from '@/models/enum/Layout';
import { FlexWrap } from '@/models/enum/Flex';
import { ContentAlignment, ItemAlignment, VerticalAlignment } from '@/models/enum/Alignment';
import { Margin, Padding } from '@/models/class/Layout';

interface FlexProps {
    children?: React.ReactNode;
    backgroundColor?:Color;
    padding?:Padding;
    margin?:Margin;
    horizontalAlignment? : ItemAlignment;
    verticalAlignment? : ContentAlignment;
    width? : Dimension;
    height?: Dimension;
    isReverse?: boolean;
    wrap?:FlexWrap;
    // overflow?: Overflow;
    gap? : number;
}

const FlexColumn: React.FC<FlexProps> = ({
    children,
    margin = new Margin({all:undefined}), 
    padding = new Padding({all:undefined}),
    backgroundColor = Color.INHERIT,
    height,
    width = Dimension.FULL,
    wrap = FlexWrap.WRAP,
    // overflow = Overflow.AUTO,
    gap = 0,
    isReverse = false,
    horizontalAlignment = ItemAlignment.START,
    verticalAlignment = ContentAlignment.START
  }) => {
  
  if(wrap != FlexWrap.NO_WRAP){
    // overflow = Overflow.VISIBLE;
  }
    
  const flexrowClass = classNames(
    // "overflow-scroll",
    "flex", 
    // "items-center",
    // "justify-center",

    `justify-${verticalAlignment}`,
    `items-${horizontalAlignment}`,
   

    {
     "flex-col-reverse" : isReverse,
     "flex-col" : !isReverse
    },
   
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
    // `overflow-${overflow}`,
  );

  return (
    <div className={flexrowClass}>
      {children}
    </div>
  );
};

export default FlexColumn;
