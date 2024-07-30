
import React from 'react';
import classNames from 'classnames';
import { Color } from '@/models/enum/Color';
import { Dimension, Direction, Position } from '@/models/enum/Layout';
import { Basis } from '@/models/enum/Flex';
import { Margin, Padding } from '@/models/class/Layout';
import { ContentAlignment } from '@/models/enum/Alignment';

interface FlexProps {
    children?: React.ReactNode;
    backgroundColor?:Color;
    padding?:Padding;
    margin?:Margin;
    // alignment? : ;
    width? : Dimension;
    height?: Dimension;
    basis:Basis;
    verticalAlignment? : ContentAlignment;
    position? : Position;
}

const FlexChild: React.FC<FlexProps> = ({
    position = Position.STATIC,
    children,
    margin = new Margin({all:undefined}), 
    padding = new Padding({all:undefined}),
    backgroundColor = Color.INHERIT,
    height,
    verticalAlignment = ContentAlignment.START,
    width = Dimension.FULL,
    basis
  }) => {
  const flexrowClass = classNames(
    "flex", 
    `basis-${basis}`,
    {"flex-grow" : basis === Basis.GROW},
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

    `content-${verticalAlignment}`,
    {
      'absolute': position === Position.ABSOLUTE,
      "static": position === Position.STATIC,
      'sticky': position === Position.STICKY,
      "relative": position === Position.RELATIVE,
      'fixed': position === Position.FIXED
      
      
    },
  );

  return (
    <div className={flexrowClass}>
      {children}
    </div>
  );
};

export default FlexChild;
