
"use client"

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
import { ContentAlignment, SelfAlignment, TextAlignment } from "@/models/enum/Alignment"
import { Dimension, Direction } from "@/models/enum/Layout"
import { Color } from "@/models/enum/Color"
import Container from "@/components/atoms/Container"
import { Padding, Margin } from "@/models/class/Layout"
import Flex from "@/components/atoms/Flex"
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




export default function RtiCharacterPage() {

   const margin = new Margin({y:16})
   const padding = new Padding({all:6})

    return (
  
      <Container>

        

        {/* navbar */}
        <Container >
          <RtiNavbar />
          {/* <ThemeChanger /> */}
        </Container>
        
        

        {/* introduction */}
        <Container width={Dimension["2/3"]} padding={new Padding({top:32})}>

          <GridColumn cols={3} gap={2}>

            <GridCell  >
              
              <Box padding={padding} backgroundColor={Color.ACCENT} borderRadius={BorderRadius.LG}>
                <Image 
                  borderStyle={BorderStyle.SOLID}
                  borderColor={Color.BASE_100}
                  borderRadius={BorderRadius.XL} />
                <Text 
                  textAlignment={TextAlignment.CENTER}
                  textColor={Color.ACCENT_CONTENT}
                  padding={new Padding({y:5})}
                  textLevel={TextLevel.H6}>
                  John Doe
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
                    <TCell width={Dimension["2/12"]} rowSpan={1} >Nama Saya</TCell>
                    <TCell width={Dimension["1/12"]} >:</TCell>
                    <TCell width={Dimension["9/12"]} >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laudantium iure deserunt sunt in ipsum, minus hic error. Consectetur deserunt reiciendis dolorem nam blanditiis veritatis quod consequuntur magnam tempore doloremque!
                    </TCell>                  
                  </TRow>
                  <TRow>
                    <TCell>Nama</TCell>
                    <TCell>:</TCell>
                    <TCell>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laudantium iure deserunt sunt in ipsum, minus hic error. Consectetur deserunt reiciendis dolorem nam blanditiis veritatis quod consequuntur magnam tempore doloremque!</TCell>                  
                  </TRow>
                  <TRow>
                    <TCell>Nama</TCell>
                    <TCell>:</TCell>
                    <TCell>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laudantium iure deserunt sunt in ipsum, minus hic error. Consectetur deserunt reiciendis dolorem nam blanditiis veritatis quod consequuntur magnam tempore doloremque!</TCell>                  
                  </TRow>
                  <TRow>
                    <TCell>Nama</TCell>
                    <TCell>:</TCell>
                    <TCell>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laudantium iure deserunt sunt in ipsum, minus hic error. Consectetur deserunt reiciendis dolorem nam blanditiis veritatis quod consequuntur magnam tempore doloremque!</TCell>                  
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
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis cumque ratione facilis ipsam alias quasi officia iure minima molestias eum neque illum, placeat aliquid, debitis provident! Omnis aspernatur cumque cupiditate!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quibusdam, praesentium temporibus nesciunt incidunt aliquid saepe libero illum in voluptatum dolores laboriosam provident totam fuga eos similique inventore illo aliquam.
                </Text>
                
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
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis cumque ratione facilis ipsam alias quasi officia iure minima molestias eum neque illum, placeat aliquid, debitis provident! Omnis aspernatur cumque cupiditate!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quibusdam, praesentium temporibus nesciunt incidunt aliquid saepe libero illum in voluptatum dolores laboriosam provident totam fuga eos similique inventore illo aliquam.
                </Text>
                
              </Box>
            </GridCell>

          </GridColumn>
        </Container>   

        {/* Content */}

        <Container backgroundColor={Color.ACCENT}  padding={padding}>
          <Container  width={Dimension["2/3"]}>
            {/* <Motion anim={AnimationStyle.SWIPE_UP_IN}><Characters/></Motion> */}
          </Container>
        </Container>   

       

        {/* Footer */}
        <Container backgroundColor={Color.NEUTRAL}>
          <Container width={Dimension["2/3"]}>    
            <Footer />
            <Flex backgroundColor={Color.ACCENT} width={Dimension["96D"]} height={Dimension["96D"]} direction={Direction.COL} gap={4}>
              <BoxExample/>
              <BoxExample/>
              <BoxExample/>
            </Flex>
          </Container> 
        </Container>
        



       


      </Container>
    )
  }