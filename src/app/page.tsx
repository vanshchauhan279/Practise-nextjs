"use client"

import React from "react";
import { useState,useEffect } from "react";


const MainHead = () => {

const [screenwidth,setScreenwidth] = useState(window.innerWidth)

  
  useEffect(()=>{
      const handleWidthchange = () => setScreenwidth(window.innerWidth);
      
      window.addEventListener('resize',handleWidthchange)
      console.log("chm")
  },[])

  return (
    <div className="flex justify-center items-center flex-col">

      <h1>Width of my Screen : {screenwidth}</h1>
      
    </div>
  );
};

export default MainHead;
