import { useEffect } from 'react';




import React from 'react';
import classNames from 'classnames';
import Image from '@/components/atoms/Image';
import {BorderRadius, BorderStyle } from '@/models/enum/Border';
import { Color } from '@/models/enum/Color';
import Input from '@/components/atoms/Input';
import { InputStyle, InputType } from '@/models/enum/Input';
import TextArea from '@/components/atoms/TextArea';
import { ImageFit } from '@/models/enum/Image';
import ChatBubble from '@/components/atoms/ChatBubble';
import Button from '@/components/atoms/Button';
import { ChatPosition } from '@/models/enum/ChatPosition';
import GridColumn from '@/components/atoms/GridColumn';
import GridRow from '@/components/atoms/GridRow';
import GridCell from '@/components/atoms/GridCell';
import Text from '@/components/atoms/Text';
import { ContentAlignment, TextAlignment } from '@/models/enum/Alignment';
import { Dimension, Direction, Overflow } from '@/models/enum/Layout';

import Flex from '@/components/atoms/Flex';
import FlexChild from '@/components/atoms/FlexChild';
import { Basis, FlexWrap } from '@/models/enum/Flex';
import Box from '@/components/atoms/Box';
import { Shadow } from '@/models/enum/Shadow';
import ImageChar from './ImageChar';
import { Padding, Margin } from '@/models/class/Layout';
import { TextLevel } from '@/models/enum/Typography';
import Motion from '@/components/anims/Motion';
import { AnimationStyle, AnimationTrigger } from '@/models/enum/Animation';

interface RtiCharactersProps {
  
}

const Characters: React.FC<RtiCharactersProps> = ({  }) => {
  const rticharactersClass = classNames({
    
  });
  const items = Array.from({ length: 20 })

  return (

    
    <div>
    <Text padding={new Padding({all:5})} textLevel={TextLevel.H3}>Characters :</Text>

    <Flex direction={Direction.ROW}  alignment={ContentAlignment.START} gap={0} wrap={FlexWrap.WRAP}>
      {items.map((_,x)=>(
        
      <FlexChild basis={Basis['1/5']}  padding={new Padding({all:5})} >
        <a href="google.com">
        <Motion triger={AnimationTrigger.HOVER} scaled={1.4} anim={AnimationStyle.SCALED}>
          <ImageChar title={"John Doe #"+x} />
        </Motion>
       
        </a>
       
      </FlexChild>
      ))}
    </Flex> 
      
     

     


    </div>
  );
};

export default Characters;
