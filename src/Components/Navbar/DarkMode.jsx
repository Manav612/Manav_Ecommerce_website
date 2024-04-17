import React from 'react'
import light from "../../assets/light.png"
import dark from "../../assets/dark.png"
const DarkMode = () => {
    const [theme,settheme]=React.useState(
        localStorage.getItem("theme") ? 
         localStorage.getItem("theme") : "light"
    )
    const element = document.documentElement;
    
    React.useEffect(()=>{
        if (theme === "dark") {
            element.classList.add('dark');
            localStorage.setItem('theme','dark');
        } else {
            element.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    },[theme])

  return (
    <div className='relative'>
      <img onClick={()=>settheme(theme === 'light'?"dark":"light")} src={light} alt="" className={`w-12 cursor-pointer drop-shadow-sm transition-all duration-300 absolute right-0 z-10 ${theme === "dark"?"opacity-0":"opacity-100"}`} />
      <img onClick={()=>settheme(theme === 'light'?"dark":"light")} src={dark} alt="" className='w-12 cursor-pointer drop-shadow-sm transition-all duration-300' />
    </div>
  )
}

export default DarkMode
