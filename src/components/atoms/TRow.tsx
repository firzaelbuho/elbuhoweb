
import React, { Children } from 'react';
import classNames from 'classnames';
import { Dimension } from '@/models/enum/Layout';
import { Color } from '@/models/enum/Color';


interface TRowProps {
  children?: React.ReactNode;
  width?: Dimension;
  textColor?: Color;
  backGroundColor?: Color;
  
 
}

const TRow: React.FC<TRowProps> = ({ 
  children,
  textColor,
  width,
  backGroundColor
  
 }) => {
  const trowClass = classNames(
    `text-${textColor}`,
    `bg-${backGroundColor}`,
    
  );

  
  return (
    <tr className={trowClass}>
      {children}
    </tr>
  );

  
};

export default TRow;
