
"use client"

import ThemeChanger from "@/components/molecules/ThemeChanger"
import RtiNavbar from "@/components/organisms/RtiNavbar"
import Testing from "@/components/molecules/Testing"
import Image from "@/components/atoms/Image"
import TextBlock from "@/components/atoms/TextBlock"
import RtiJumbotron from "@/components/molecules/rti/RtiJumbotron"
import RtiWelcome from "@/components/organisms/RtiWelcome"
import Footer from "@/components/organisms/Footer"
import RtiCharacters from "@/components/molecules/rti/RtiCharacters"



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
          <RtiJumbotron />
        </div>   

        {/* introduction */}
        <div className=" p-5">
          <div className="container w-2/3 mx-auto">
            <RtiWelcome />
          </div>
        </div>   

        {/* introduction */}

        <div className="py-5  bg-accent">
          <div className="container w-2/3 mx-auto text-accent-content">
          <RtiWelcome />
          <RtiCharacters/>
          </div>
        </div>   

        <div className="  bg-primary">
          <div className="container w-2/3 mx-auto text-primary-content">
          <RtiWelcome />
          </div>
        </div>   

        <div className="bg-accent">
          <div className="container w-2/3 mx-auto text-accent-content">
          <RtiWelcome />
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