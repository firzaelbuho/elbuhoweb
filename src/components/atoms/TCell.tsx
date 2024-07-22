
import React from 'react';
import classNames from 'classnames';
import { VerticalAlignment } from '@/models/enum/Alignment';
import { Dimension } from '@/models/enum/Layout';
import { CellType } from '@/models/enum/Table';
import { Padding } from '@/models/class/Layout';

interface TCellProps {
  children?: React.ReactNode;
  alignment?:VerticalAlignment;
  width?: Dimension;
  cellType?:CellType;
  padding?: Padding;
  colSpan?:number;
  rowSpan?:number;

}

const TCell: React.FC<TCellProps> = ({
  children,
  colSpan = 1, 
  rowSpan = 1,
  padding = new Padding({all:undefined}),
  alignment = VerticalAlignment.TOP,
  cellType = CellType.NORMAL,
  width
  }) => {
  const tcellClass = classNames(
    `align-${alignment}`,
    `w-${width}`,
    
    // Padding
    `mt-${padding.top}`,
    `mb-${padding.bottom}`,
    `ml-${padding.left}`,
    `mr-${padding.right}`,
    
  );

  if(cellType === CellType.NORMAL){
    return <td colSpan={colSpan} rowSpan={rowSpan} className={tcellClass}>{children}</td>
  } else {
    return <th colSpan={colSpan} rowSpan={rowSpan} className={tcellClass}>{children}</th>
  }


  
};

export default TCell;
