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
import { getAllCharacters, loadCharacters } from '@/models/dummy/dummy';
import { fetchAllCharacters } from '@/services/characterServices';

import { useState } from 'react';

interface RtiCharactersProps {
 
}

const Characters: React.FC<RtiCharactersProps> = ({  
  
}) => {
  const rticharactersClass = classNames({

    
    
  });
  const items = Array.from({ length: 20 })

  // const characterData: Character[] = 
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    async function fetchCharacters() {
      const loadedCharacters = await fetchAllCharacters();
      setCharacters(loadedCharacters);
      console.log(loadedCharacters)
    }

    fetchCharacters();
  }, []);

  return (

    
    <div>
    <Text textColor={Color.ACCENT_CONTENT} padding={new Padding({all:5})} textLevel={TextLevel.H3}>Characters :</Text>

    <FlexRow   gap={0} wrap={FlexWrap.WRAP}>
      {characters.map((char)=>(
        
      <FlexChild basis={Basis['1/5']}  padding={new Padding({all:5})} key={char.charId}>
       
        <Motion triger={AnimationTrigger.HOVER} scaled={1.2} anim={AnimationStyle.SCALED}>
          <a href={"/relife-the-island/character/"+char.charId}>
            <ImageChar title={char.fullName} url={`/assets/characters/${char.fullName}.jpeg`} />
          </a>
        </Motion>
        
       
      </FlexChild>
      ))}
    </FlexRow> 
      
     

     


    </div>
  );
};

export default Characters;
