import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import SearchAndFilter from "./SearchAndFilter";

export default function Redirecting() {
    const [shouldRedirect, setShouldRedirect] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldRedirect(true);
        }, 2000); // Delay redirection for 2 seconds

        return () => clearTimeout(timer);
    }, []);

    if (shouldRedirect) {
        return <Navigate to="/countries" replace />;
    }

    return <>
    <Navbar></Navbar>
    <SearchAndFilter></SearchAndFilter>
    <h1 className="h-[58vh] flex justify-center items-center max-sm:h-[70vh] max-sm:text-2xl text-green-500 text-3xl text-center">Loading...</h1>
    </>
}
