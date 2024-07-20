
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
import GridColumn from '@/components/atoms/GridColumn';
import GridRow from '@/components/atoms/GridRow';
import GridCell from '@/components/atoms/GridCell';
import Text from '@/components/atoms/Text';
import { ContentAlignment, TextAlignment } from '@/models/Alignment';
import { Dimension, Direction, Overflow } from '@/models/Layout';

import Flex from '@/components/atoms/Flex';
import FlexChild from '@/components/atoms/FlexChild';
import { Basis, FlexWrap } from '@/models/Flex';
import Box from '@/components/atoms/Box';
import { Shadow } from '@/models/Shadow';
import ImageChar from './ImageChar';

interface RtiCharactersProps {
  
}

const Characters: React.FC<RtiCharactersProps> = ({  }) => {
  const rticharactersClass = classNames({
    
  });

  return (
    
    <div>
     
    <Flex direction={Direction.ROW}  alignment={ContentAlignment.START} gap={4} wrap={FlexWrap.WRAP}>
      <FlexChild basis={Basis['12D']}>
        <ImageChar />
      </FlexChild>
      <FlexChild basis={Basis['12D']}>
        <ImageChar />
      </FlexChild>
      <FlexChild basis={Basis['12D']}>
        <ImageChar />
      </FlexChild>
      <FlexChild basis={Basis['12D']}>
        <ImageChar />
      </FlexChild>
      
    
     
      
    </Flex> 
      
     

     


    </div>
  );
};

export default Characters;
