
"use client"

import ThemeChanger from "@/components/molecules/general/ThemeChanger"
import RtiNavbar from "@/components/organisms/RtiNavbar"

import Image from "@/components/atoms/Image"
import TextBlock from "@/components/atoms/Text"
import Jumbotron from "@/components/molecules/rti/Jumbotron"
import Welcome from "@/components/molecules/rti/Welcome"
import Footer from "@/components/organisms/Footer"
import Characters from "@/components/molecules/rti/Characters"



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

        {/* introduction */}

        <div className="py-5  bg-accent bg-">
          <div className="container w-2/3 mx-auto text-accent-content">
          <Welcome />
          <Characters/>
          </div>
        </div>   

        <div className="  bg-primary">
          <div className="container w-2/3 mx-auto text-primary-content">
          <Welcome />
          </div>
        </div>   

        <div className="bg-accent">
          <div className="container w-2/3 mx-auto text-accent-content">
          <Welcome />
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