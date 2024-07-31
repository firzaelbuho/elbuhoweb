"use client"
import { useState } from "react";
import React from "react";
import { useEffect } from 'react'
// import { themeChange } from 'theme-change'




export default function ThemeChanger(){
   
    const currentTheme = window.localStorage.getItem('toolit_theme') || 'light';
    const [theme, setTheme] = useState(currentTheme);
    // setTheme(currentTheme);

    const options = ["dark",
        "light",  "cupcake", "bumblebee", "emerald", "corporate", "synthwave",
        "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua",
        "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk",
        "autumn", "business", "acid", "lemonade", "night", "coffee", "winter", "dim",
        "nord", "sunset"
      ];

    const toggleTheme = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTheme(event.target.value);
        window.localStorage.setItem('toolit_theme', event.target.value);
        // alert("diklik")
    };
  // initially set the theme and "listen" for changes to apply them to the HTML tag
    useEffect(() => {
        const htmlElement = document.querySelector('html') as HTMLHtmlElement | null;
        htmlElement?.setAttribute('data-theme', theme);

    }, [theme]);
    return (
        <label className="swap">
            <select defaultValue={currentTheme} className="select w-full max-w-xs input-primary-content" onChange={toggleTheme}>
                {/* <option disabled selected>Theme</option> */}
                
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
                {/* <option value="light">light</option> */}
               
            </select>
 
        </label>
    );
}

// export default function ThemeChanger(){
//     return(
//         <div>Tes</div>
//     )
// }