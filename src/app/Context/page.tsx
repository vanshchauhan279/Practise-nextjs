"use client"
import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';
import Child1 from '../components/Child1';

const themeContext = createContext();

const Context = () => {
    const [theme, setTheme] = useState("light");
    
  return (
    <themeContext.Provider value= {{theme,setTheme}}>
      <div className={`flex ${theme==="dark"? "bg-yellow-100" : "bg-black"} p-10 justify-center items-center`}>
          <Child1/>
      </div>
    </themeContext.Provider>
  

  )
}

export default Context;
export {themeContext};
