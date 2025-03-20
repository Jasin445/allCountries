import { useRouteError, Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import SearchAndFilter from "./SearchAndFilter";

export default function ErrorComponent(){
    const error: any = useRouteError() as {message?: string};
    const location = useLocation()


    return (
        <>
    <Navbar />
    { location.pathname === "/countries/" && <SearchAndFilter /> }
    <div className="flex gap-9 w-full justify-center items-center flex-col h-[70vh]">
        <h1 className="text-5xl leading-[90px] text-red-500 w-[60%] text-center">Error: {error?.message || "Something went wrong!!"}</h1>
        <Link to="/countries/" className="p-3 bg-slate-500 rounded">Retry</Link>
    </div>
    </>
    )

}