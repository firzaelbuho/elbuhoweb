"use client"
import { useState, useEffect } from "react";
import React from "react";

export default function ThemeChanger() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const currentTheme = window.localStorage.getItem('toolit_theme') || 'light';
            setTheme(currentTheme);
        }
    }, []);

    const options = ["dark", "light", "cupcake", "bumblebee", "emerald", "corporate", "synthwave",
        "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua",
        "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk",
        "autumn", "business", "acid", "lemonade", "night", "coffee", "winter", "dim",
        "nord", "sunset"
    ];

    const toggleTheme = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newTheme = event.target.value;
        setTheme(newTheme);
        if (typeof window !== 'undefined') {
            window.localStorage.setItem('toolit_theme', newTheme);
        }
    };

    useEffect(() => {
        const htmlElement = document.querySelector('html') as HTMLHtmlElement | null;
        htmlElement?.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <label className="swap">
            <select defaultValue={theme} className="select w-full max-w-xs input-primary-content" onChange={toggleTheme}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </label>
    );
}
