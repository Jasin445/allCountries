import SearchAndFilter from "./SearchAndFilter";
import CountryCard from "./CountryCard";
import { useOutletContext } from "react-router-dom";

export default function Countries() {
    const {theme, country: loaderData } = useOutletContext<any>()
   

    if (!loaderData) {
        return <h1 className="h-[100vh] flex justify-center items-center text-green-500 text-3xl text-center"> Loading...</h1>;
    }

    return (
        <div>
            <SearchAndFilter theme={theme} data={loaderData}/>
            <CountryCard data={loaderData} />
        </div>
    );
}
