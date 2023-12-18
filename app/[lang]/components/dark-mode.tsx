"use client";
import React, { useState, useEffect } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function DarkMode(){
    const [isDarkMode, setIsDarkMode] = useState(false);

    const changeDarkMode = () => {
        document.documentElement.classList.toggle("dark");
        setIsDarkMode(!isDarkMode);
      };

      useEffect(() => {
        const isDark = document.documentElement.classList.contains("dark");
        setIsDarkMode(isDark);
    }, []);


    return(
        <div>
            <button
                className="bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-2 py-1.5 rounded-md w-[40px] h-[40px] flex justify-center items-center"
                onClick={changeDarkMode}
              >
                {isDarkMode ? (
                    <MdOutlineDarkMode />
                ) : (
                    <MdOutlineLightMode />
                )}
              </button>
        </div>
        
    );

}