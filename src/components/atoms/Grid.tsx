
import React from 'react';
import classNames from 'classnames';
import { Color } from '@/models/Color';
import {Dimension, Direction } from '@/models/Layout';
import { ContentAlignment } from '@/models/Alignment';

interface GridProps {
    children: React.ReactNode;
    gap?:number;
    count:number;
    color?:Color;
    padding?:number;
    margin?:number;
    direction: Direction;
    alignment? : ContentAlignment;
    width? : Dimension;
    height?: Dimension;
}

const Grid: React.FC<GridProps> = ({ 
  direction,children, 
  alignment = ContentAlignment.NORMAL,
  gap = 4, count , 
  color = Color.INHERIT, margin, padding,
  height = Dimension.FULL,
  width = Dimension.FULL
}) => {
  
  let flow = direction === Direction.HORIZONTAL ? "cols" : "rows";
  // alert(   `grid-${flow}-${count}`)
  const gridClass = classNames(
    "grid", 
    `bg-${color}`,
    `m-${margin}`,
    `p-${padding}`,
    `gap-${gap}`,
    `content-${alignment}`,
    
    `h-${height}`,
    `w-${width}`,
    
    `grid-${flow}-${count}`,
    { "grid-flow-col" : direction === Direction.VERTICAL}
   
    
  );

  return (
    <div className={gridClass}>
      {children}
    </div>
  );
};

export default Grid;
