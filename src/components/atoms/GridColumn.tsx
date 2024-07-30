
import React from 'react';
import classNames from 'classnames';
import { Color } from '@/models/enum/Color';
import {Dimension } from '@/models/enum/Layout';
import { ContentAlignment } from '@/models/enum/Alignment';
import { Margin, Padding } from '@/models/class/Layout';

interface GridProps {
    children?: React.ReactNode;
    gap?:number;
    cols?:1|2|3|4|5|6|7|8|9|10|11|12;
    backgroundColor?:Color;
    padding?:Padding;
    margin?:Margin;
    // direction: Direction;
    horizontalAlignment? : ContentAlignment;
    width? : Dimension;
    height?: Dimension;
}

const GridColumn: React.FC<GridProps> = ({ 
  children, 
  horizontalAlignment = ContentAlignment.NORMAL,
  gap = 0, cols=1 , 
  backgroundColor = Color.INHERIT, 
  margin = new Margin({all:undefined}), 
  padding = new Padding({all:undefined}),
  height ,
  width = Dimension.FULL
}) => {
  
 
  const gridClass = classNames(
    "grid",
    `bg-${backgroundColor}`,
   
    `gap-${gap}`,
    `content-${horizontalAlignment}`,
    
    `h-${height}`,
    `w-${width}`,
    
    `grid-cols-${cols}`,

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
   
    
  );

  return (
    <div className={gridClass}>
      {children}
    </div>
  );
};

export default GridColumn;
