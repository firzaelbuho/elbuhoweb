
"use client"

import ThemeChanger from "@/components/molecules/ThemeChanger"
import Navbar from "@/components/organisms/Navbar"

import TextInput from "@/components/atoms/TextInput"
import Testing from "@/components/molecules/Testing"



export default function RtiHomePage() {

    const handleClick  = ()=>{console.info("hello")}

    return (
  
      <div className="container mx-auto  p-5">
       
        <Navbar />
        <ThemeChanger />
        <div className="container">
          
          <Testing />

        </div>   
      </div>
    )
  }