import React from 'react';
import classNames from 'classnames';


interface ImageProps {
  url: string;
  alt?:string
  width?: string;
  height?: string;
  fit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  alignment?: 'left' | 'center' | 'right';
  borderRadius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
  border?: 'none' | 'solid' | 'dashed' | 'dotted';
  borderColor?: string;
}

const Image: React.FC<ImageProps> = ({
  url,
  alt ="",
  width,
  height,
  fit = 'none',
  alignment = 'center',
  borderRadius = 'none',
  border = 'none',
  borderColor = 'black'
  
}) => {
  const imageClass = classNames(
    `object-${fit}`,"solid-black", "border-4",
    {
      'mx-auto': alignment === 'center',
      'ml-auto': alignment === 'right',
      'mr-auto': alignment === 'left',
    },
    {
      'rounded-none': borderRadius === 'none',
      'rounded-sm': borderRadius === 'sm',
      'rounded-md': borderRadius === 'md',
      'rounded-lg': borderRadius === 'lg',
      'rounded-xl': borderRadius === 'xl',
      'rounded-2xl': borderRadius === '2xl',
      'rounded-3xl': borderRadius === '3xl',
      'rounded-full': borderRadius === 'full',
    },
    {
        'border-none': border === 'none',
        'border-solid': border === 'solid',
        'border-dashed': border === 'dashed',
        'border-dotted': border === 'dotted',
      }
  );

  return (
    <img
      src={url}
      alt={alt}
      width={width}
      height={height}
      className={imageClass}
      style={{ display: 'block', width, height }}
    />
  );
};

export default Image;
