
import React from 'react';
import classNames from 'classnames';
import { Color } from '@/models/enum/Color';
import { Dimension, Direction } from '@/models/enum/Layout';
import { Basis } from '@/models/enum/Flex';
import { Margin, Padding } from '@/models/class/Layout';

interface FlexProps {
    children?: React.ReactNode;
    backgroundColor?:Color;
    padding?:Padding;
    margin?:Margin;
    // alignment? : ;
    width? : Dimension;
    height?: Dimension;
    basis:Basis;
}

const FlexChild: React.FC<FlexProps> = ({
    children,
    margin = new Margin({all:undefined}), 
    padding = new Padding({all:undefined}),
    backgroundColor = Color.INHERIT,
    height = Dimension.FULL,
    width = Dimension.FULL,
    basis
  }) => {
  const flexrowClass = classNames(
    "flex", 
    `basis-${basis}`,
    `bg-${backgroundColor}`,
    
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
