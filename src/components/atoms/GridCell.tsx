
import React from 'react';
import classNames from 'classnames';
import { Dimension, Position } from '@/models/enum/Layout';
import { Color } from '@/models/enum/Color';
import { Margin, Padding } from '@/models/class/Layout';
import { ContentAlignment } from '@/models/enum/Alignment';

interface GridProps {
    children?: React.ReactNode;
    colSpan?:number;
    rowSpan?:number;
    padding?:Padding;
    margin?:Margin;
    backgroundColor?:Color;
    width? : Dimension;
    height?: Dimension;
    position? : Position;
    verticalAlignment? : ContentAlignment;

  
}

const GridCell: React.FC<GridProps> = ({ 
    position = Position.STATIC,
    children, 
    margin = new Margin({all:undefined}), 
    padding = new Padding({all:undefined}),
    colSpan = 1,
    rowSpan = 1,
    backgroundColor = Color.INHERIT,
    height,
    width = Dimension.FULL,
    verticalAlignment = ContentAlignment.START
}) => {
  const gridClass = classNames(
    "grid", 
    `bg-${backgroundColor}`,
    `col-span-${colSpan}`,
    `row-span-${rowSpan}`,
  
    `h-${height}`,
    `w-${width}`,

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

   `content-${verticalAlignment}`,
   {
    'absolute': position === Position.ABSOLUTE,
    "static": position === Position.STATIC,
    'sticky': position === Position.STICKY,
    "relative": position === Position.RELATIVE,
    'fixed': position === Position.FIXED
    
    
  }
  


  );

  return (
    <div className={gridClass}>
      {children}
    </div>
  );
};

export default GridCell;
