
import React from 'react';
import classNames from 'classnames';
import { Dimension } from '@/models/Layout';
import { Color } from '@/models/Color';
import { Margin, Padding } from '@/models/class/Layout';

interface GridProps {
    children: React.ReactNode;
    colSpan?:number;
    rowSpan?:number;
    padding?:Padding;
    margin?:Margin;
    background?:Color;
    width? : Dimension;
    height?: Dimension;
}

const GridCell: React.FC<GridProps> = ({ 
    children, 
    margin = new Margin({all:0}), 
    padding = new Margin({all:0}),
    colSpan = 1,
    rowSpan = 1,
    background = Color.INHERIT,
    height = Dimension.FULL,
    width = Dimension.FULL
}) => {
  const gridClass = classNames(
    "grid", 
    `bg-${background}`,
    `col-span-${colSpan}`,
    `row-span-${rowSpan}`,
  
    `h-${height}`,
    `w-${width}`,

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

export default GridCell;
