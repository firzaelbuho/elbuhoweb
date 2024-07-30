
import React from 'react';
import classNames from 'classnames';
import Container from '@/components/atoms/Container';
import Navbar from '@/components/organisms/Navbar';
import RtiNavbar from '@/components/organisms/RtiNavbar';
import { Dimension, Overflow } from '@/models/enum/Layout';
import GridColumn from '@/components/atoms/GridColumn';
import GridCell from '@/components/atoms/GridCell';
import BoxExample from '@/components/atoms/BoxExample';
import GridRow from '@/components/atoms/GridRow';
import { Padding } from '@/models/class/Layout';
import Box from '@/components/atoms/Box';
import { Color } from '@/models/enum/Color';
import { BorderRadius } from '@/models/enum/Border';
import AvatarCanvas from '@/components/molecules/avatar/AvatarCanvas';
import AvatarTabSelect from '@/components/molecules/avatar/AvatarTabSelect';
import AvatarItemSelect from '@/components/molecules/avatar/AvatarItemSelect';
import FlexRow from '@/components/atoms/FlexRow';
import FlexChild from '@/components/atoms/FlexChild';
import { Basis } from '@/models/enum/Flex';
import FlexColumn from '@/components/atoms/FlexColumn';

interface AvatarHomePageProps {
  
}

const AvatarHomePage: React.FC<AvatarHomePageProps> = ({  }) => {
  const avatarhomepageClass = classNames({
    
  });

  return (
    <Container>
        <Container>
            <RtiNavbar />
        </Container>

     
        <Container padding={new Padding({top:32})} width={Dimension['2/3']}>
        
            <GridColumn cols={2} gap={2}>
                <GridCell   padding={new Padding({all:0})}>
                    <Box padding={new Padding({all:3})} backgroundColor={Color.ACCENT} borderRadius={BorderRadius.XL}>

                       <AvatarCanvas />
                    </Box>
                </GridCell>

                <GridCell padding={new Padding({all:0})}>
                    <FlexColumn gap={2}>
                        <GridCell >
                        <Container    
                            backgroundColor={Color.ACCENT} 
                            borderRadius={BorderRadius.XL}
                            padding={new Padding({all:3})}>
                                <Box  
                                //  backgroundColor={Color.PRIMARY} 
                                // width={Dimension['96D']}
                                padding={new Padding({all:0})} 
                                overflow={Overflow.SCROLL}
                               
                               >
                                    <AvatarTabSelect />
                                </Box>
                            </Container>
                        </GridCell>

                        {/*  Item */}
                        <GridCell >
                            <Container    
                            backgroundColor={Color.ACCENT} 
                            borderRadius={BorderRadius.XL}
                            padding={new Padding({all:3})}>
                                <Box  
                                height={Dimension['56D']}
                                padding={new Padding({all:0})} 
                               
                               >
                                    <AvatarItemSelect />
                                </Box>
                            </Container>
                            
                        </GridCell>
                    </FlexColumn>
                </GridCell>
            </GridColumn>
        </Container>
    </Container>
  );
};

export default AvatarHomePage;
