import React from 'react';
import classNames from 'classnames';
import { BorderRadius, BorderStyle } from '@/models/Border';
import { ImageAlignment } from '@/models/Alignment';
import { ImageFit } from '@/models/Image';



interface ImageProps {
  url: string;
  alt?:string
  width?: string;
  height?: string;
  fit?: ImageFit;
  alignment?: ImageAlignment;
  borderRadius?: BorderRadius;

  borderColor?: string;
  borderStyle?: BorderStyle;
}

const Image: React.FC<ImageProps> = ({
  url,
  alt ="",
  width,
  height,
  fit = ImageFit.NONE,
  alignment = ImageAlignment.LEFT,
  borderRadius = BorderRadius.MD,
  borderStyle = BorderStyle.NONE



  
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
        'border-none': borderStyle === BorderStyle.NONE,
        'border-solid': borderStyle === BorderStyle.SOLID,
        'border-dashed': borderStyle === BorderStyle.DASHED,
        'border-dotted': borderStyle === BorderStyle.DOTTED,
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
