
import React from 'react';
import classNames from 'classnames';
import FlexRow from '@/components/atoms/FlexRow';
import FlexChild from '@/components/atoms/FlexChild';
import { Dimension, Overflow } from '@/models/enum/Layout';
import { Basis, FlexWrap } from '@/models/enum/Flex';
import { Margin, Padding } from '@/models/class/Layout';
import Image from '@/components/atoms/Image';
import { ImageFit } from '@/models/enum/Image';
import { Color } from '@/models/enum/Color';
import ComponentRepeater from '@/components/atoms/ComponentRepeater';
import GridColumn from '@/components/atoms/GridColumn';
import GridCell from '@/components/atoms/GridCell';

interface AvatarTabSelectProps {
  
}

const AvatarItemSelect: React.FC<AvatarTabSelectProps> = ({  }) => {
  const avatartabselectClass = classNames({
    
  });

  return (
    <GridColumn cols={4} gap={2} >

      <ComponentRepeater count={40}> 
        <GridCell>
          <Image fit={ImageFit.CONTAIN}/>
        </GridCell>
      </ComponentRepeater>
    
    </GridColumn>
  );
};

export default AvatarItemSelect;
