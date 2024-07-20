
import React from 'react';
import classNames from 'classnames';
import Image from '@/components/atoms/Image';
import { ImageAlignment, TextAlignment } from '@/models/Alignment';
import { ImageFit } from '@/models/Image';
import Button from '@/components/atoms/Button';
import { Color } from '@/models/Color';
import Text from '@/components/atoms/Text';

interface ImageCharProps {

    url? : string;
    title?: string;
   
}

const ImageChar: React.FC<ImageCharProps> = ({ 
    url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrPKSe_z6cgW-yTyEBOILtedGE1hyCFBHSKg&s",
    title = "John Doe",
  
 }) => {
  const imagecharClass = classNames(
    "card", 
    "card-compact",
    "bg-base-100",
    "shadow-xl",
    "w-full"
  );

  return (
        <div className={imagecharClass}>
        <figure>
            <Image 
                imageAlignment={ImageAlignment.CENTER}
                fit={ImageFit.COVER}
                url={url}
                
            />
        </figure>
        <div className="card-body">

            <h2 className="card-title text-center text-base-content">
                {title}
               
            </h2>
            {/* <Text isBlock={true} textAlignment={TextAlignment.CENTER}>Hi !</Text> */}
            {/* <p>{subTitle}</p> */}
          
        </div>
        </div>
  );
};

export default ImageChar;
