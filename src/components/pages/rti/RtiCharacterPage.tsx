
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
import CharacterProfile from "@/components/molecules/rti/CharacterProfile"
import { useEffect, useState } from "react"
import { fetchAllCharactersById } from "@/services/characterServices"

interface AvatarHomePageProps {
  charId:number
}


const  RtiCharacterPage : React.FC<AvatarHomePageProps> = ({ 
  charId
 }) =>  {

  const margin = new Margin({y:16})
  const padding = new Padding({all:6}) 

  // const characterData: Character[] = 
  const [character, setCharacters] = useState<Character>(new Character);

  useEffect(() => {
    async function fetchCharacters() {
      const loadedCharacter = await fetchAllCharactersById(charId);
      setCharacters(loadedCharacter);
      console.log(loadedCharacter)
    }

    fetchCharacters();
  }, []);


  return (
  
      <Container>

        {/* navbar */}
        <Container >
          <RtiNavbar />
          {/* <ThemeChanger /> */}
        </Container>
        
        

        {/*Char Profile */}
        <Container width={Dimension["2/3"]} padding={new Padding({top:32, bottom:16})}>

          <CharacterProfile character={character} />

        </Container>   

        {/* <Divider x={0} y={100} /> */}
       

        {/* Footer */}
        <Container backgroundColor={Color.NEUTRAL} >
          <Container width={Dimension["2/3"]} >    
            <Footer />
           
          </Container> 
        </Container>
        



       


      </Container>
    )
  }

  export default RtiCharacterPage;