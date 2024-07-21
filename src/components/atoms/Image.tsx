import React from 'react';
import classNames from 'classnames';
import { BorderRadius, BorderStyle } from '@/models/enum/Border';
import { ImageAlignment } from '@/models/enum/Alignment';
import { ImageFit } from '@/models/enum/Image';
import { Color } from '@/models/enum/Color';
import { Shadow } from '@/models/enum/Shadow';
import { Dimension } from '@/models/enum/Layout';



interface ImageProps {
  url?: string;
  alt?:string
  width?: Dimension;
  height?: Dimension;
  fit?: ImageFit;
  imageAlignment?: ImageAlignment;
  borderRadius?: BorderRadius;
  borderSize?:number
  borderColor?: Color;
  borderStyle?: BorderStyle;
  shadow?: Shadow;
}

const Image: React.FC<ImageProps> = ({
  url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrPKSe_z6cgW-yTyEBOILtedGE1hyCFBHSKg&s",
  alt ="",
  width = Dimension.FULL,
  height = Dimension.AUTO,
  fit = ImageFit.COVER,
  imageAlignment = ImageAlignment.LEFT,
  borderRadius = BorderRadius.NONE,
  borderStyle = BorderStyle.NONE,
  borderColor = Color.INHERIT,
  borderSize = 4,
  shadow = Shadow.NONE



  
}) => {
  const imageClass = classNames(
    `object-${fit}`,
    `border-${borderColor}`,
    `border-${borderSize}`,
    `h-${height}`,
    `w-${width}`,
    {
      'mx-auto': imageAlignment === ImageAlignment.CENTER,
      'ml-auto': imageAlignment === ImageAlignment.RIGHT,
      'mr-auto': imageAlignment === ImageAlignment.LEFT,
    },
   `${shadow}`,
    `rounded-${borderRadius}`,
    // {
    //   'rounded-none': borderRadius === 'none',
    //   'rounded-sm': borderRadius === 'sm',
    //   'rounded-md': borderRadius === 'md',
    //   'rounded-lg': borderRadius === 'lg',
    //   'rounded-xl': borderRadius === 'xl',
    //   'rounded-2xl': borderRadius === '2xl',
    //   'rounded-3xl': borderRadius === '3xl',
    //   'rounded-full': borderRadius === 'full',
    // },
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
      style={{ display: 'block'}}
    />
  );
};

export default Image;
