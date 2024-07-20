
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
import AnimationOnScroll from "@/components/anims/AnimationOnScroll"
import { AnimationStyle } from "@/models/Animation"




export default function RtiHomePage() {

   

    return (
  
      <div className="">

        {/* navbar */}
        <div>
          <RtiNavbar />
          <ThemeChanger />
        </div>
        
        {/* jumbotron */}
        <div className="mt-2">
          <Jumbotron />
        </div>   

        {/* introduction */}
        <div className=" p-5">
          <div className="container w-2/3 mx-auto">
            <Welcome />
          </div>
        </div>   

        {/* Content */}

        
        <div className="py-5  bg-accent bg-">
          <div className="container w-2/3 mx-auto text-accent-content">
          {/* <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            >
              <Characters/>
            </motion.div>
          
           */}
           <AnimationOnScroll anim={AnimationStyle.SWIPE_RIGHT} duration={1}><Characters/></AnimationOnScroll>
          </div>
        </div>   

       

        {/* Footer */}
        <div className=" bg-neutral">
          <div className="container w-2/3 mx-auto ">
          <Footer />
          </div>
        </div> 



       


      </div>
    )
  }