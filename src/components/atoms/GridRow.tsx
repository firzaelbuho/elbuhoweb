
import React from 'react';
import classNames from 'classnames';
import { Color } from '@/models/Color';
import {Dimension} from '@/models/Layout';
import { ContentAlignment } from '@/models/Alignment';

interface GridProps {
    children: React.ReactNode;
    gap?:number;
    rows:1|2|3|4|5|6|7|8|9|10|11|12;
    background?:Color;
    padding?:number;
    margin?:number;
    // direction: Direction;
    // verticalAlignment? : ContentAlignment;
    width? : Dimension;
    height?: Dimension;
}

const GridRow: React.FC<GridProps> = ({ 
  children, 
//   verticalAlignment = ContentAlignment.NORMAL,
  gap = 0, rows = 1 , 
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
    // `content-${verticalAlignment}`,
   
    `h-${height}`,
    `w-${width}`,
    
    `grid-rows-${rows}`,
    "grid-flow-col" 
   
    
  );

  return (
    <div className={gridClass}>
      {children}
    </div>
  );
};

export default GridRow;
