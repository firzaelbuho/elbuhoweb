
import React from 'react';
import classNames from 'classnames';
import { Color } from '@/models/Color';
import { Dimension, Direction } from '@/models/Layout';
import { Basis } from '@/models/Flex';

interface FlexProps {
    children: React.ReactNode;
    background?:Color;
    padding?:number;
    margin?:number;
    // alignment? : ;
    width? : Dimension;
    height?: Dimension;
    basis:Basis;
}

const FlexChild: React.FC<FlexProps> = ({
    children,
    margin=0, 
    padding=0,
    background = Color.INHERIT,
    height = Dimension.FULL,
    width = Dimension.FULL,
    basis
  }) => {
  const flexrowClass = classNames(
    "flex", 
    `basis-${basis}`,
    `bg-${background}`,
    `m-${margin}`,
    `p-${padding}`,
    `h-${height}`,
    `w-${width}`,
  );

  return (
    <div className={flexrowClass}>
      {children}
    </div>
  );
};

export default FlexChild;
