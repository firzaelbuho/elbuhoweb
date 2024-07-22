
import React from 'react';
import classNames from 'classnames';
import { Dimension } from '@/models/enum/Layout';
import { Color } from '@/models/enum/Color';
import { Margin, Padding } from '@/models/class/Layout';

interface GridProps {
    children?: React.ReactNode;
    colSpan?:number;
    rowSpan?:number;
    padding?:Padding;
    margin?:Margin;
    backgroundColor?:Color;
    width? : Dimension;
    height?: Dimension;

  
}

const GridCell: React.FC<GridProps> = ({ 
    children, 
    margin = new Margin({all:undefined}), 
    padding = new Padding({all:undefined}),
    colSpan = 1,
    rowSpan = 1,
    backgroundColor = Color.INHERIT,
    height = Dimension.FULL,
    width = Dimension.FULL
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


  );

  return (
    <div className={gridClass}>
      {children}
    </div>
  );
};

export default GridCell;
