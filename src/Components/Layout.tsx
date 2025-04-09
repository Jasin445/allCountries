import { Suspense, useContext } from "react";
import Navbar from "./Navbar";
import {  Await, Outlet, useLoaderData, useLocation } from "react-router-dom";
import { LayoutContext } from "./Context";
import ErrorComponent from "./ErrorComponent";
import ScrollToTop from "./Scroll";
import SearchAndFilter from "./SearchAndFilter";




export default function Layout(){
    const countries: any = useLoaderData();
    const location = useLocation()
    const {theme, setTheme, darkModeToggle} = useContext<any>(LayoutContext)

    return (
        <>
            <ScrollToTop />
            <Navbar />
              {location.pathname === '/' && <SearchAndFilter /> }
            <Suspense fallback={<ErrorComponent err={'Loading Countries...'} />}>
                <Await resolve={countries.data} errorElement={countries?.data?.message}>
                    {(resolvedData) => {

                        return <Outlet context={{ resolvedData, theme, setTheme, darkModeToggle }} />;
                    }}
                </Await>
            </Suspense>
        </>
    );
   
}