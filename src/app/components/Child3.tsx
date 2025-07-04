import React, { useContext } from 'react'
import { themeContext } from '../Context/page'


const Child3 = () => {
    const {theme, setTheme} = useContext(themeContext);
    const handleTheme = ()=>{
       if(theme==="light")
         setTheme("dark")
       else
         setTheme("light") 
    }
  return (
    <div>
         <button className='bg-blue-600 px-6 py-2 text-white rounded-lg' onClick={handleTheme}>
            {theme}
        </button>
    </div>
  )
}

export default Child3
