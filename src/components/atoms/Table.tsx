
import React from 'react';
import classNames from 'classnames';
import { Dimension } from '@/models/enum/Layout';
import { Color } from '@/models/enum/Color';
import { Padding } from '@/models/class/Layout';

interface TableProps {
  children?: React.ReactNode;
  width?: Dimension;
  textColor?: Color;
  isTabled?:boolean;
  // padding?: Padding;
}

const Table: React.FC<TableProps> = ({ 
  children, 
  textColor,
  width = Dimension.FULL,
  isTabled = false
  // padding = new Padding({all:undefined}),
 }) => {
  const tableClass = classNames(
    {"table" : isTabled},
    
    `text-${textColor}`,
    `w-${width}`,

    // Padding
    // `pt-${padding.top}`,
    // `pb-${padding.bottom}`,
    // `pl-${padding.left}`,
    // `pr-${padding.right}`,
  );

  return (
    <table className={tableClass}>
      {children}
    </table>
  );
};

export default Table;
