import { Sun , Moon} from 'lucide-react';
import React , {useEffect, useState} from 'react';
import {cn} from '../lib/utils';

const Togglebtn = () => {
    const [isdarkmode, setIsdarkmode] = useState(false)

    useEffect(()=>{
      const storeTheme = localStorage.getItem("theme");
      if((storeTheme === "dark")){
        setIsdarkmode(true);
        document.documentElement.classList.add("theme","dark");

      }
      else{
        setIsdarkmode(false);
         localStorage.setItem("theme","light");
      }
    },[])

    const toggletheme =()=>{
      if(isdarkmode){
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme","light");
        setIsdarkmode(false);
    }
    else{
              document.documentElement.classList.add("dark");
        localStorage.setItem("theme","dark");

      setIsdarkmode(true);
    }
  }

  return (
  <button onClick={toggletheme} className={cn("max-sm:hidden top-5 right-5 rounded-full transition-colors p-2 fixed duration-300",
    "focus:outline-hidden",
    "z-50"
  )} 
  > {isdarkmode ? <Sun className='h-6 w-6 text-yellow-300'/>: <Moon className='h-6 w-6 text-blue-800'/> }</button>
  )
}

export default Togglebtn 