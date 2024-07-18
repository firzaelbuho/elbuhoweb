import React from 'react';
import classNames from 'classnames';

interface TextProps {
  children: React.ReactNode;
  alignment?: 'left' | 'right' | 'center' | 'justify';
  color?: 'primary' | 'secondary' | 'warning' | 'error' | 'success' | 'info' | 'accent'  |'base-content' |'primary-content' |'secondary-content' |'accent-content';
  size?: 'base' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
}

const TextBlock: React.FC<TextProps> = ({ children, alignment = 'left', color="inherit", size="base" }) => {
  const textClass = classNames(
   
    `text-${alignment}`, 
    `text-${color}`,
    {[`text-${size}`]: size},
  );

  return <div className={textClass}>{children}</div>;
};

export default TextBlock;
