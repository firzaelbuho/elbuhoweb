
import React from 'react';
import classNames from 'classnames';
import { Color } from '@/models/Color';
import { Dimension, Direction, Overflow } from '@/models/Layout';
import { FlexWrap } from '@/models/Flex';
import { ContentAlignment } from '@/models/Alignment';
import { Margin, Padding } from '@/models/class/Layout';

interface FlexProps {
    children: React.ReactNode;
    background?:Color;
    padding?:Padding;
    margin?:Margin;
    alignment? : ContentAlignment;
    width? : Dimension;
    height?: Dimension;
    direction:Direction;
    wrap?:FlexWrap;
    overflow?: Overflow;
    gap? : number;
}

const Flex: React.FC<FlexProps> = ({
    children,
    margin = new Margin({all:0}), 
    padding = new Margin({all:0}),
    background = Color.INHERIT,
    height = Dimension.FULL,
    width = Dimension.FULL,
    wrap = FlexWrap.WRAP,
    overflow = Overflow.AUTO,
    gap = 0,
    direction,
    alignment = ContentAlignment.START
  }) => {
  const flexrowClass = classNames(
    // "overflow-scroll",
    "flex", 
    // "items-center",
    // "justify-center",
    `justify-${alignment}`,
    `flex-${direction}`,
    `bg-${background}`,

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

    `h-${height}`,
    `w-${width}`,
    `gap-${gap}`,
    `flex-${wrap}`,
    `overflow-${overflow}`,
  );

  return (
    <div className={flexrowClass}>
      {children}
    </div>
  );
};

export default Flex;
