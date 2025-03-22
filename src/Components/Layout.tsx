import { Suspense, useContext } from "react";
import Navbar from "./Navbar";
import {  Await, Outlet, useLoaderData } from "react-router-dom";
import { LayoutContext } from "./Context";
import ErrorComponent from "./ErrorComponent";



export default function Layout(){
    const countries: any = useLoaderData();
    const {theme, setTheme, darkModeToggle} = useContext<any>(LayoutContext)
    return (
        <>
            <Navbar />
            <Suspense fallback={<ErrorComponent err={'Loading Countries...'} />}>
                <Await resolve={countries.data} errorElement={countries.data}>
                    {(resolvedData) => {
                       
                        return <Outlet context={{ resolvedData, theme, setTheme, darkModeToggle }} />;
                    }}
                </Await>
            </Suspense>
        </>
    );
   
}