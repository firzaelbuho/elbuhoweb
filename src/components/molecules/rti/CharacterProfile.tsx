

import ThemeChanger from "@/components/molecules/general/ThemeChanger"
import RtiNavbar from "@/components/organisms/RtiNavbar"

import Image from "@/components/atoms/Image"
import TextBlock from "@/components/atoms/Text"
import Jumbotron from "@/components/molecules/rti/Jumbotron"
import Welcome from "@/components/molecules/rti/Welcome"
import Footer from "@/components/organisms/Footer"
import Characters from "@/components/molecules/rti/Characters"

import { motion } from 'framer-motion';
import AnimationOnScroll from "@/components/anims/Motion"
import { AnimationStyle } from "@/models/enum/Animation"
import Motion from "@/components/anims/Motion"
import Box from "@/components/atoms/Box"
import { ContentAlignment, ItemAlignment, SelfAlignment, TextAlignment } from "@/models/enum/Alignment"
import { Dimension, Direction } from "@/models/enum/Layout"
import { Color } from "@/models/enum/Color"
import Container from "@/components/atoms/Container"
import { Padding, Margin } from "@/models/class/Layout"
import Flex from "@/components/atoms/FlexRow"
import GridColumn from "@/components/atoms/GridColumn"
import GridCell from "@/components/atoms/GridCell"
import { BorderRadius, BorderStyle } from "@/models/enum/Border"
import Text from "@/components/atoms/Text"
import { TextLevel } from "@/models/enum/Typography"
import Table from "@/components/atoms/Table"
import TRow from "@/components/atoms/TRow"
import TCell from "@/components/atoms/TCell"
import TBody from "@/components/atoms/TBody"
import BoxExample from "@/components/atoms/BoxExample"
import FlexRow from "@/components/atoms/FlexRow"
import FlexColumn from "@/components/atoms/FlexColumn"
import { Character } from "@/models/class/Characters"
import Divider from "@/components/atoms/Divider"
import classNames from "classnames"
import { BASE_URL } from "@/utils/util"

interface CharacterProfileProps {

  character : Character
  
}

const CharacterProfile: React.FC<CharacterProfileProps> = ({ 
  character
 }) => {
  const characterprofileClass = classNames({
    
  });
  const margin = new Margin({y:16})
  const padding = new Padding({all:6}) 

  return (
    <GridColumn cols={3} gap={2}>

            <GridCell  >
              
              <Box padding={padding} backgroundColor={Color.ACCENT} borderRadius={BorderRadius.LG}>
                <Image 
                  src={`${BASE_URL}/assets/characters/${character.fullName}.jpeg`}
                  borderStyle={BorderStyle.SOLID}
                  borderColor={Color.BASE_100}
                  borderRadius={BorderRadius.XL} />
                <Text 
                  textAlignment={TextAlignment.CENTER}
                  textColor={Color.ACCENT_CONTENT}
                  padding={new Padding({y:5})}
                  textLevel={TextLevel.H6}>
                  {character?.fullName}
                </Text> 
                
                
              </Box>
            </GridCell>

            {/* Tabel biodata  */}
           
            <GridCell colSpan={2} >
              <Box padding={padding} backgroundColor={Color.ACCENT} borderRadius={BorderRadius.LG}>
                <Text textLevel={TextLevel.H6} textColor={Color.ACCENT_CONTENT}>Profile :</Text>

                <Table textColor={Color.ACCENT_CONTENT}>
                  <TBody>
                  <TRow>
                    <TCell width={Dimension["2/12"]} rowSpan={1} >Full Name</TCell>
                    <TCell width={Dimension["1/12"]} >:</TCell>
                    <TCell width={Dimension["9/12"]} >
                     {character.fullName}
                    </TCell>                  
                  </TRow>
                  <TRow>
                    <TCell>Gender</TCell>
                    <TCell>:</TCell>
                    <TCell> {character.gender}</TCell>                  
                  </TRow>
                  <TRow>
                    <TCell>Age</TCell>
                    <TCell>:</TCell>
                    <TCell> {character.age}</TCell>                  
                  </TRow>
                  <TRow>
                    <TCell>Job</TCell>
                    <TCell>:</TCell>
                    <TCell>
                      {character.jobs?.map((job)=>(job.jobName+ " "))}
                    </TCell>                  
                  </TRow>
                  <TRow>
                    <TCell>Origin</TCell>
                    <TCell>:</TCell>
                    <TCell>{character.origin}</TCell>                  
                  </TRow>
                  <TRow>
                    <TCell>Dateable</TCell>
                    <TCell>:</TCell>
                    <TCell>{character.isDateable}</TCell>                  
                  </TRow>
                  <TRow>
                    <TCell>Relatives</TCell>
                    <TCell>:</TCell>
                    <TCell>
                    relatives
                    </TCell>                  
                  </TRow>
                  </TBody>
                  
                </Table>
              </Box>
            </GridCell>

            <GridCell colSpan={3} >
              <Box 
                padding={padding} 
                backgroundColor={Color.ACCENT} 
                borderRadius={BorderRadius.LG} 
                textColor={Color.ACCENT_CONTENT} >

                <Text textLevel={TextLevel.H4}>Desription :</Text>
                <Text textLevel={TextLevel.PHARAGRAPH} textAlignment={TextAlignment.JUSTIFY} >
                  {character.description}
                </Text>
                
              </Box>
            </GridCell>
            <GridCell colSpan={3} >
              <Box 
                padding={padding} 
                backgroundColor={Color.ACCENT} 
                borderRadius={BorderRadius.LG} 
                textColor={Color.ACCENT_CONTENT} >

                <Text textLevel={TextLevel.H4}>Detailed Info :</Text>

                <Text textLevel={TextLevel.H5} padding={new Padding({top:5, bottom:2})}>Foods</Text>
                <Text textLevel={TextLevel.H6} padding={new Padding({top:0})}>Likes :</Text>
                <Text textLevel={TextLevel.PHARAGRAPH} textAlignment={TextAlignment.JUSTIFY} >
                  Roti, Kue
                 </Text>
                 <Text textLevel={TextLevel.H6} padding={new Padding({top:0})}>Dislikes :</Text>
                <Text textLevel={TextLevel.PHARAGRAPH} textAlignment={TextAlignment.JUSTIFY} >
                  Roti, Kue
                 </Text>

                 <Text textLevel={TextLevel.H5} padding={new Padding({top:5, bottom:2})}>Goods</Text>
                <Text textLevel={TextLevel.H6} padding={new Padding({top:0})}>Likes :</Text>
                <Text textLevel={TextLevel.PHARAGRAPH} textAlignment={TextAlignment.JUSTIFY} >
                  Roti, Kue
                 </Text>
                 <Text textLevel={TextLevel.H6} padding={new Padding({top:0})}>Dislikes :</Text>
                <Text textLevel={TextLevel.PHARAGRAPH} textAlignment={TextAlignment.JUSTIFY} >
                  Roti, Kue
                 </Text>

                 <Text textLevel={TextLevel.H5} padding={new Padding({top:5, bottom:2})}>Hobbies</Text>
                <Text textLevel={TextLevel.H6} padding={new Padding({top:0})}>Likes :</Text>
                <Text textLevel={TextLevel.PHARAGRAPH} textAlignment={TextAlignment.JUSTIFY} >
                  Roti, Kue
                 </Text>
                 <Text textLevel={TextLevel.H6} padding={new Padding({top:0})}>Dislikes :</Text>
                <Text textLevel={TextLevel.PHARAGRAPH} textAlignment={TextAlignment.JUSTIFY} >
                  Roti, Kue
                 </Text>
                
              </Box>
            </GridCell>

          </GridColumn>
  );
};

export default CharacterProfile;
