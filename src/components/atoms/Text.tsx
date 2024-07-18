import React from 'react';
import classNames from 'classnames';

interface TextProps {
  children: React.ReactNode;
 
  color?: 'primary' | 'secondary' | 'warning' | 'error' | 'success' | 'info' | 'accent'  |'base-content' |'primary-content' |'secondary-content' |'accent-content';
  size?: 'base' |'inherit'| 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
}

const Text: React.FC<TextProps> = ({ children,  color="base-content", size="inherit" }) => {
  const textClass = classNames(
   
    `text-${color}`,
    {[`text-${size}`]: size},
  );

  return <div className={textClass}>{children}</div>;
};

export default Text;
