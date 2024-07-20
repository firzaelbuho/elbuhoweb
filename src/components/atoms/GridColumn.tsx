
import React from 'react';
import classNames from 'classnames';
import { Color } from '@/models/Color';
import {Dimension } from '@/models/Layout';
import { ContentAlignment } from '@/models/Alignment';

interface GridProps {
    children: React.ReactNode;
    gap?:number;
    cols?:1|2|3|4|5|6|7|8|9|10|11|12;
    background?:Color;
    padding?:number;
    margin?:number;
    // direction: Direction;
    horizontalAlignment? : ContentAlignment;
    width? : Dimension;
    height?: Dimension;
}

const GridColumn: React.FC<GridProps> = ({ 
  children, 
  horizontalAlignment = ContentAlignment.NORMAL,
  gap = 0, cols=1 , 
  background = Color.INHERIT, margin, padding,
  height = Dimension.FULL,
  width = Dimension.FULL
}) => {
  
 
  const gridClass = classNames(
    "grid", 
    `bg-${background}`,
    `m-${margin}`,
    `p-${padding}`,
    `gap-${gap}`,
    `content-${horizontalAlignment}`,
    
    `h-${height}`,
    `w-${width}`,
    
    `grid-cols-${cols}`
   
    
  );

  return (
    <div className={gridClass}>
      {children}
    </div>
  );
};

export default GridColumn;
