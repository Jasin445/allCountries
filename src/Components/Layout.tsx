import { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Outlet, useLoaderData } from "react-router-dom";
import { LayoutContext } from "./Context";



export default function Layout(){
    const countries: any = useLoaderData();
    const {theme, setTheme, darkModeToggle} = useContext<any>(LayoutContext)
    const [country, setCountry] = useState(null)
    
    

    useEffect(() => {
        if(countries){
        setCountry(countries)
        }
    }, [countries])


    if (!country) {
        return <h1 className="h-[100vh] flex justify-center items-center text-green-500 text-3xl text-center"> Loading...</h1>;
    }
         return <>
       
        <Navbar  />
        <Outlet context={{country, theme, setTheme, darkModeToggle}}/>    

        </>
    

   
}