
import React from 'react';
import classNames from 'classnames';
import Image from '@/components/atoms/Image';
import {BorderRadius, BorderStyle } from '@/models/Border';

interface RtiCharactersProps {
  
}

const RtiCharacters: React.FC<RtiCharactersProps> = ({  }) => {
  const rticharactersClass = classNames({
    
  });

  return (
    <div>
      <Image 
      url ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrPKSe_z6cgW-yTyEBOILtedGE1hyCFBHSKg&s" 
      width='200px'
      height='200px'
      borderRadius={BorderRadius['3XL']}
      borderStyle={BorderStyle.DASHED}
     
      />
         <Image 
      url ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrPKSe_z6cgW-yTyEBOILtedGE1hyCFBHSKg&s" 
      width='200px'
      height='200px'
      borderRadius={BorderRadius.XL}
      borderStyle={BorderStyle.DASHED}
     
      />
    </div>
  );
};

export default RtiCharacters;
