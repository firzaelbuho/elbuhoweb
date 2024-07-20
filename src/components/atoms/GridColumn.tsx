
import React from 'react';
import classNames from 'classnames';
import { Color } from '@/models/Color';
import {Dimension } from '@/models/Layout';
import { ContentAlignment } from '@/models/Alignment';
import { Margin, Padding } from '@/models/class/Layout';

interface GridProps {
    children: React.ReactNode;
    gap?:number;
    cols?:1|2|3|4|5|6|7|8|9|10|11|12;
    background?:Color;
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
  background = Color.INHERIT, 
  margin = new Margin({all:0}), 
  padding = new Margin({all:0}),
  height = Dimension.FULL,
  width = Dimension.FULL
}) => {
  
 
  const gridClass = classNames(
    "grid", 
    `bg-${background}`,
   
    `gap-${gap}`,
    `content-${horizontalAlignment}`,
    
    `h-${height}`,
    `w-${width}`,
    
    `grid-cols-${cols}`,

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
   
    
  );

  return (
    <div className={gridClass}>
      {children}
    </div>
  );
};

export default GridColumn;