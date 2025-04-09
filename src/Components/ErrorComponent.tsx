import { useRouteError, Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import SearchAndFilter from "./SearchAndFilter";

export default function ErrorComponent({err, noHead}: any){
    const error: any = useRouteError() as {message?: string};
    const location = useLocation()
    const navigate = useNavigate();

    function reload(){
        navigate(0)
    }

    return (
        <>
    <Navbar />
    { ((location.pathname === "/countries" || location.pathname === '/'  && !err) && !noHead) && <SearchAndFilter /> }
    <div className={`flex gap-9 w-full justify-center items-center flex-col h-[60vh] max-sm:h-[70vh]`}>
        <h1 className={`text-3xl leading-[90px] text-red-500 w-[96%] text-center max-sm:text-xl  ${err ? `h-[15vh] max-sm:h-[10vh]` : 'max-sm:h-[1vh]'}`}>{err ? '' : 'Error:'} {error?.message || err || "Something went wrong!!"}</h1>
        
        { location.pathname === "/countries" ? <Link to="/countries" onClick={reload}  className={`px-3 py-[3px] bg-slate-500 rounded ${err ? 'hidden' : 'block'}`}>Reload</Link> : <Link to={'/countries'} className="px-3 py-[3px] bg-slate-500 rounded">Reload</Link> }
    </div>
    </>
    )

}