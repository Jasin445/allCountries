import { createContext, useEffect, useState } from "react";


type LayoutContextType = {
    theme: string,
    setTheme: React.Dispatch<React.SetStateAction<string>>,
    darkModeToggle: any
} | null; // Allow it to be null initially'


export const LayoutContext = createContext<LayoutContextType>({setTheme: () => {}, theme: '', darkModeToggle: () => {}})

export default function DarkModeProvider({children}: any){
    const [theme, setTheme] = useState<string>(() => localStorage.getItem('theme') || "light")

    useEffect(() => {
        
        localStorage.setItem('theme', theme )
        document.documentElement.classList.toggle('dark', theme === "dark"); 
    }, [theme])

    function darkModeToggle(){
        setTheme(prev => prev === "light" ? "dark" : "light" )
    }

    return  <LayoutContext.Provider value={{theme, setTheme,darkModeToggle }}>
        {children}
    </LayoutContext.Provider>
}