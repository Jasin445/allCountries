import { useContext } from 'react'
import lightModeImg from '../assets/Group 3.png'
import { LayoutContext } from './Context'

export default function Navbar(){

    const context = useContext(LayoutContext);

    if (!context) {
        return null; // Prevent errors if context is null
    }

    const { theme, darkModeToggle } = context;
    return (
        
    <>
    <nav className="h-[80px] z-[1000] fixed top-0 w-full place-content-center shadow-custom p-4 bg-white dark:bg-[#2B3844] dark:shadow-dark">
        <div className="l w-[90%] mx-auto flex flex-nowrap justify-between items-center">
            <h1 className="text-[#111517] max-sm:text-[16px] font-extrabold text-[24px] dark:text-[#fff]">Where in the World?</h1>
            <div onClick={darkModeToggle} className="flex gap-2 items-center">
                <img className='w-[20px] h-[20px]' src={lightModeImg } alt="" />
                <button className="text-[#111517]  max-sm:text-[14px] text-[16px] font-semibold dark:text-[#fff]">{theme === "light" ? "Dark mode" : "Light mode"}</button>
            </div>
        </div>
    </nav>
   
    </>
    )
}