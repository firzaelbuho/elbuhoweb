
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
import { ContentAlignment, SelfAlignment } from "@/models/enum/Alignment"
import { Dimension } from "@/models/enum/Layout"
import { Color } from "@/models/enum/Color"
import Container from "@/components/atoms/Container"
import { Padding, Margin } from "@/models/class/Layout"




export default function RtiHomePage() {

   const margin = new Margin({y:16})
   const padding = new Padding({y:16})

    return (
  
      <Container>

        

        {/* navbar */}
        <Container width={Dimension["2/3"]}>
          <RtiNavbar />
          <ThemeChanger />
        </Container>
        
        {/* jumbotron */}
        <Container width={Dimension["2/3"]}>
          <Jumbotron />
        </Container>   

        {/* introduction */}
        <Container width={Dimension["2/3"]} padding={padding}>
          <Welcome />
        </Container>   

        {/* Content */}

        <Container background={Color.ACCENT}  padding={padding}>
          <Container  width={Dimension["2/3"]}>
            <Motion anim={AnimationStyle.SWIPE_UP_IN}><Characters/></Motion>
          </Container>
        </Container>   

       

        {/* Footer */}
        <Container background={Color.NEUTRAL}>
          <Container width={Dimension["2/3"]}>    
            <Footer />
          </Container> 
        </Container>
        



       


      </Container>
    )
  }