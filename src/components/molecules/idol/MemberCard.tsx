
import React from 'react';
import classNames from 'classnames';
import Image from '@/components/atoms/Image';
import { ContentAlignment, ImageAlignment, TextAlignment } from '@/models/enum/Alignment';
import { ImageFit } from '@/models/enum/Image';
import Button from '@/components/atoms/Button';
import { Color } from '@/models/enum/Color';
import Text from '@/components/atoms/Text';
import { TextLevel } from '@/models/enum/Typography';
import { Member } from '@/models/class/Jkt48';
import GridColumn from '@/components/atoms/GridColumn';
import GridRow from '@/components/atoms/GridRow';
import GridCell from '@/components/atoms/GridCell';
import { Padding } from '@/models/class/Layout';
import Box from '@/components/atoms/Box';
import { BorderRadius, BorderStyle } from '@/models/enum/Border';
import { Dimension, Position } from '@/models/enum/Layout';
import Container from '@/components/atoms/Container';

interface ImageCharProps {

    member:Member
   
}

const MemberCard: React.FC<ImageCharProps> = ({ 
    member
  
 }) => {
  const imagecharClass = classNames(
    "card", 
    "card-compact",
    "bg-error",
    "shadow-xl",
    "w-full"
  );

  return (
        <Box 
            borderRadius={BorderRadius['3XL']} 
            width={Dimension['60D']}
            height={Dimension['80D']}
            borderStyle={BorderStyle.SOLID}
            borderColor={Color.ERROR}
            >
        
                <GridColumn 
                    cols={3} 
                    
                    height={Dimension['4/5']} 
                    backgroundColor={Color.WHITE}
                    padding={new Padding({x:2})} >
                    <GridCell verticalAlignment={ContentAlignment.CENTER}  >
                       
                        <Text textColor={Color.BLACK} textAlignment={TextAlignment.CENTER} textLevel={TextLevel.H1}>90</Text>
                    </GridCell>
                    <GridCell 
                        colSpan={2} 
                        verticalAlignment={ContentAlignment.END}
                        position={Position.RELATIVE}>
                        
                            <Image 
                            imageAlignment={ImageAlignment.CENTER}
                            fit={ImageFit.COVER}
                            src='http://localhost:3000/assets/kabesha/shani.png'
                            
                            />
                            
                            <div 
                            className='absolute bg-primary inset-0 mt-32'
                            style={{
                                background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 1) 99%)',
                                pointerEvents: 'none',
                              }}
                            >
                            

                            </div>
                        
                       
 
                    </GridCell>
                </GridColumn>
          
            <Container height={Dimension['1/5']} backgroundColor={Color.ERROR} verticalAlignment={ContentAlignment.CENTER}>
                <Text   textAlignment={TextAlignment.CENTER} textLevel={TextLevel.H5}>{member.nickname[0]}</Text>
            </Container>
                
           
       
        </Box>
       
  );
};

export default MemberCard;
