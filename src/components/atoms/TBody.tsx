
import React, { Children } from 'react';
import classNames from 'classnames';
import { Dimension } from '@/models/enum/Layout';
import { Color } from '@/models/enum/Color';
import { CellType } from '@/models/enum/Table';


interface props {
  children?: React.ReactNode;
  textColor?: Color;
  
 
}

const TBody: React.FC<props> = ({ 
  children,
  textColor,

  
 }) => {
  const trowClass = classNames(
    `text-${textColor}`,
    
  );

  
  return (
    <tbody className={trowClass}>
      {children}
    </tbody>
  );

  
};

export default TBody;
