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

import Flex from '@/components/atoms/FlexRow';
import FlexChild from '@/components/atoms/FlexChild';
import { Basis, FlexWrap } from '@/models/enum/Flex';
import Box from '@/components/atoms/Box';
import { Shadow } from '@/models/enum/Shadow';
import ImageChar from './ImageChar';
import { Padding, Margin } from '@/models/class/Layout';
import { TextLevel } from '@/models/enum/Typography';
import Motion from '@/components/anims/Motion';
import { AnimationStyle, AnimationTrigger } from '@/models/enum/Animation';
import FlexRow from '@/components/atoms/FlexRow';
import { Character, Job } from '@/models/class/Characters';
import { getAllCharacters } from '@/models/dummy/dummy';

interface RtiCharactersProps {
  
}

const Synopsys: React.FC<RtiCharactersProps> = ({  }) => {
  const rticharactersClass = classNames({
    
  });
  const items = Array.from({ length: 20 })

  // const characterData: Character[] = 
  const characters = getAllCharacters();

  return (

    
    <div>
    <Text textColor={Color.ACCENT_CONTENT} padding={new Padding({all:5})} textLevel={TextLevel.H3}>
        Synopsys :
    </Text>
    <Text textColor={Color.ACCENT_CONTENT}  padding={new Padding({all:5})}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid vel commodi rerum magnam asperiores, odio, perferendis voluptatibus consequuntur id doloremque quo sapiente incidunt. Nisi adipisci debitis nobis impedit recusandae expedita!
    </Text>

    </div>
  );
};

export default Synopsys;


