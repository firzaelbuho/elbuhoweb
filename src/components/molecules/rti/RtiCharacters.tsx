
import React from 'react';
import classNames from 'classnames';
import Image from '@/components/atoms/Image';

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
      borderRadius='2xl'
      border='dashed'
     
      />
    </div>
  );
};

export default RtiCharacters;
