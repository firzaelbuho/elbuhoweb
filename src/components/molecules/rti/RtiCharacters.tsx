
import React from 'react';
import classNames from 'classnames';
import Image from '@/components/atoms/Image';
import {BorderRadius, BorderStyle } from '@/models/Border';
import { Color } from '@/models/Color';
import Input from '@/components/atoms/Input';
import { InputStyle, InputType } from '@/models/Input';
import TextArea from '@/components/atoms/TextArea';
import { ImageFit } from '@/models/Image';
import ChatBubble from '@/components/atoms/ChatBubble';
import Button from '@/components/atoms/Button';
import { ChatPosition } from '@/models/ChatPosition';
import Grid from '@/components/atoms/Grid';
import GridCell from '@/components/atoms/GridCell';
import Text from '@/components/atoms/Text';
import { ContentAlignment, TextAlignment } from '@/models/Alignment';
import { Dimension, Direction } from '@/models/Layout';

interface RtiCharactersProps {
  
}

const RtiCharacters: React.FC<RtiCharactersProps> = ({  }) => {
  const rticharactersClass = classNames({
    
  });

  return (
    <div>
      <Image 
      url ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrPKSe_z6cgW-yTyEBOILtedGE1hyCFBHSKg&s" 
      width='100px'
      height='200px'
      borderRadius={BorderRadius['3XL']}
      borderStyle={BorderStyle.DOTTED}
      borderColor={Color.NEUTRAL}
      borderSize={8}
      fit={ImageFit.CONTAIN}
     
      />
         <Image 
      url ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrPKSe_z6cgW-yTyEBOILtedGE1hyCFBHSKg&s" 
      width='200px'
      height='200px'
      borderRadius={BorderRadius.XL}
      borderStyle={BorderStyle.DASHED}
     
      />

    <Grid direction={Direction.HORIZONTAL} height={Dimension['32D']} color={Color.BLUE_100} alignment={ContentAlignment.BETWEEN} gap={2} count={3}>
   
   
     <GridCell width={Dimension['12D']}height={Dimension['12D']} color={Color.PRIMARY}>
      <Text c>Grid</Text>
      </GridCell>
    

    


    </Grid>

    </div>
  );
};

export default RtiCharacters;
