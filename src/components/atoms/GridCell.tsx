
import React from 'react';
import classNames from 'classnames';
import { Dimension } from '@/models/Layout';
import { Color } from '@/models/Color';

interface GridProps {
    children: React.ReactNode;
    colSpan?:number;
    rowSpan?:number;
    padding?:number;
    margin?:number;
    color?:Color;
    width? : Dimension;
    height?: Dimension;
}

const GridCell: React.FC<GridProps> = ({ 
    children, margin, padding,
    colSpan = 1,
    rowSpan = 1,
    color = Color.INHERIT,
    height = Dimension.FULL,
    width = Dimension.FULL
}) => {
  const gridClass = classNames(
    "grid", 
    `bg-${color}`,
    `col-span-${colSpan}`,
    `row-span-${rowSpan}`,
    `m-${margin}`,
    `p-${padding}`,
    `h-${height}`,
    `w-${width}`
  );

  return (
    <div className={gridClass}>
      {children}
    </div>
  );
};

export default GridCell;
