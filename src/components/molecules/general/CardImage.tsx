
import React from 'react';
import classNames from 'classnames';
import Image from '@/components/atoms/Image';
import { ImageAlignment } from '@/models/Alignment';
import { ImageFit } from '@/models/Image';
import Button from '@/components/atoms/Button';
import { Color } from '@/models/Color';

interface ImageCharProps {

    url? : string;
    title?: string;
    buttonLabel? :string;
    desc?:string;
  
}

const CardImage: React.FC<ImageCharProps> = ({ 
    url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrPKSe_z6cgW-yTyEBOILtedGE1hyCFBHSKg&s",
    title = "John Doe",
    buttonLabel = "Click Me",
    desc = "this is John Doe"
 }) => {
  const imagecharClass = classNames({
    
  });

  return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
            <Image 
                imageAlignment={ImageAlignment.CENTER}
                fit={ImageFit.COVER}
                url={url}
                
            />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{desc}</p>
            <div className="card-actions justify-end">
            <Button label={buttonLabel} color={Color.PRIMARY} />
            </div>
        </div>
        </div>
  );
};

export default CardImage;
